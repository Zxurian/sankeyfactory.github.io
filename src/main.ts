import panzoom from "panzoom";
import { SankeyNode } from "./Sankey/SankeyNode";
import { Point } from "./Point";
import { MouseHandler } from "./MouseHandler";

// Ignore import error as the file only appears on launch of the exporting tool.
// @ts-ignore
import satisfactoryData from '../dist/GameData/Satisfactory.json';

async function main()
{
    let viewport: SVGElement | null = document.querySelector("#viewport");
    let nodesGroup = document.querySelector("g.nodes") as SVGGElement;
    let linksGroup = document.querySelector("g.links") as SVGGElement;
    let zoomRatioDisplay = document.querySelector("p#ratio-display") as HTMLParagraphElement;

    if (viewport == null || nodesGroup == null || linksGroup == null)
    {
        throw new Error("Svg container is broken");
    }

    let isHoldingAlt = false;

    let panContext = panzoom(viewport, {
        zoomDoubleClickSpeed: 1, // disables double click zoom
        beforeMouseDown: () =>
        {
            return !isHoldingAlt;
        }
    });

    panContext.on('zoom', () =>
    {
        let zoomScale = panContext.getTransform()?.scale ?? 1.0;
        zoomRatioDisplay.textContent = `Zoom: ${zoomScale.toPrecision(2)}x`;
    });

    function createNode() 
    {
        const node = new SankeyNode(nodesGroup, new Point(50, 50), [50, 50], [100]);

        node.nodeSvg.onmousedown = (event) =>
        {
            if (!isHoldingAlt && event.buttons === 1)
            {
                MouseHandler.getInstance().startDraggingNode(event, node);
            }
        };
    };

    (document.querySelector("div.button#create-node") as HTMLDivElement).onclick = createNode;

    let isLocked: boolean = false;
    let lockButton = document.querySelector("div.button#lock-viewport") as HTMLDivElement;

    lockButton.onclick = () =>
    {
        if (isLocked)
        {
            panContext.resume();
            isLocked = false;
            lockButton.innerText = "Lock";
        }
        else
        {
            panContext.pause();
            isLocked = true;
            lockButton.innerText = "Unlock";
        }
    };

    MouseHandler.getInstance().setPanContext(panContext);

    window.addEventListener("keydown", (event) =>
    {
        if (event.repeat) { return; }

        if (event.key === "Alt")
        {
            isHoldingAlt = true;
            document.querySelector("#container")!.classList.add("move");
        }

        if (event.key === "Escape")
        {
            MouseHandler.getInstance().cancelConnectingSlots();
        }
    });

    window.addEventListener("keyup", (event) =>
    {
        if (event.repeat) { return; }

        if (event.key === "Alt")
        {
            isHoldingAlt = false;
            document.querySelector("#container")!.classList.remove("move");
        }
    });

    window.addEventListener("keypress", (event) =>
    {
        if (event.code === "KeyN")
        {
            createNode();
        }
    });

    window.onmouseup = () =>
    {
        MouseHandler.getInstance().handleMouseUp();
    };

    window.onmousemove = (event) =>
    {
        MouseHandler.getInstance().handleMouseMove(event);
    };

    let tabSelectors = document.querySelector("div#tab-selectors")!;
    let recipeTabs = document.querySelector("div#recipe-tabs")!;

    for (const machine of satisfactoryData.machines)
    {
        let tabSelector = document.createElement("div");
        tabSelector.classList.add("tab-selector");

        let machineIcon = document.createElement("img");
        machineIcon.classList.add("machine-icon");

        machineIcon.src = `GameData/SatisfactoryIcons/${machine.iconPath}`;
        machineIcon.alt = machine.displayName;
        machineIcon.loading = "lazy";

        tabSelector.appendChild(machineIcon);
        tabSelectors?.appendChild(tabSelector);
    }

    tabSelectors.children[0].classList.add("active");
}

main().catch((reason) =>
{
    console.error(reason);
});

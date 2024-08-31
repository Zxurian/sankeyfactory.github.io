import { SvgFactory } from "./SvgFactory";

export class SvgIcons
{
    public static replaceAllPlaceholders(): void
    {
        for (const iconName in this._icons)
        {
            let className = `svg.${iconName}_icon-placeholder`;

            document.querySelectorAll(className).forEach(element =>
            {
                this.placeIcon(element, this._icons[iconName]);

                element.classList.remove(className);
            });
        }
    }

    public static createIcon(name: string): SVGSVGElement
    {
        let svgElement = SvgFactory.createSvgElement("svg") as SVGSVGElement;

        this.placeIcon(svgElement, this._icons[name]);

        return svgElement;
    }

    private static placeIcon(svgElement: Element, iconPath: string)
    {
        svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svgElement.setAttribute("viewBox", "0 -960 960 960");

        let path = SvgFactory.createSvgPath();

        path.setAttribute("d", iconPath);

        svgElement.appendChild(path);
    }

    private static _icons: Record<string, string> = {
        "plus": "M440-440H240q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h200v-200q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v200h200q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H520v200q0 17-11.5 28.5T480-200q-17 0-28.5-11.5T440-240v-200Z",
        "locked-lock": "M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm240-200q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Z",
        "unlocked-lock": "M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h360v-80q0-50-35-85t-85-35q-42 0-73.5 25.5T364-751q-4 14-16.5 22.5T320-720q-17 0-28.5-11t-8.5-26q14-69 69-116t128-47q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM240-160v-400 400Z",
        "unlink": "m625-449-71-71h46q17 0 28.5 11.5T640-480q0 10-4 18t-11 13ZM820-84q-11 11-28 11t-28-11L84-764q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28ZM280-280q-83 0-141.5-58.5T80-480q0-69 42-123t108-71l74 74h-24q-50 0-85 35t-35 85q0 50 35 85t85 35h120q17 0 28.5 11.5T440-320q0 17-11.5 28.5T400-280H280Zm80-160q-17 0-28.5-11.5T320-480q0-17 11.5-28.5T360-520h25l79 80H360Zm380 112q-9-14-6.5-30t16.5-25q23-17 36.5-42t13.5-55q0-50-35-85t-85-35H560q-17 0-28.5-11.5T520-640q0-17 11.5-28.5T560-680h120q83 0 141.5 58.5T880-480q0 49-22.5 91.5T795-318q-14 9-30 6.5T740-328Z",
        "chevron-up": "M480-555.69 310.15-385.85q-5.61 5.62-13.77 6-8.15.39-14.53-6-6.39-6.38-6.39-14.15 0-7.77 6.39-14.15l175.53-175.54q9.7-9.69 22.62-9.69 12.92 0 22.62 9.69l175.53 175.54q5.62 5.61 6 13.77.39 8.15-6 14.53-6.38 6.39-14.15 6.39-7.77 0-14.15-6.39L480-555.69Z",
        "cross": "M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z",
        "trash": "M280-120q-33 0-56.5-23.5T200-200v-520q-17 0-28.5-11.5T160-760q0-17 11.5-28.5T200-800h160q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800h160q17 0 28.5 11.5T800-760q0 17-11.5 28.5T760-720v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM400-280q17 0 28.5-11.5T440-320v-280q0-17-11.5-28.5T400-640q-17 0-28.5 11.5T360-600v280q0 17 11.5 28.5T400-280Zm160 0q17 0 28.5-11.5T600-320v-280q0-17-11.5-28.5T560-640q-17 0-28.5 11.5T520-600v280q0 17 11.5 28.5T560-280ZM280-720v520-520Z",
        "configuration": "M480-120q-17 0-28.5-11.5T440-160v-160q0-17 11.5-28.5T480-360q17 0 28.5 11.5T520-320v40h280q17 0 28.5 11.5T840-240q0 17-11.5 28.5T800-200H520v40q0 17-11.5 28.5T480-120Zm-320-80q-17 0-28.5-11.5T120-240q0-17 11.5-28.5T160-280h160q17 0 28.5 11.5T360-240q0 17-11.5 28.5T320-200H160Zm160-160q-17 0-28.5-11.5T280-400v-40H160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h120v-40q0-17 11.5-28.5T320-600q17 0 28.5 11.5T360-560v160q0 17-11.5 28.5T320-360Zm160-80q-17 0-28.5-11.5T440-480q0-17 11.5-28.5T480-520h320q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H480Zm160-160q-17 0-28.5-11.5T600-640v-160q0-17 11.5-28.5T640-840q17 0 28.5 11.5T680-800v40h120q17 0 28.5 11.5T840-720q0 17-11.5 28.5T800-680H680v40q0 17-11.5 28.5T640-600Zm-480-80q-17 0-28.5-11.5T120-720q0-17 11.5-28.5T160-760h320q17 0 28.5 11.5T520-720q0 17-11.5 28.5T480-680H160Z",
        "power": "M420-412H302q-14 0-20-12t2-23l203-295q5-7 12-9t15 1q8 3 11.5 9.5T528-726l-27 218h140q14 0 20 13t-3 24L431-199q-5 6-12 7.5t-14-1.5q-7-3-10.5-9t-2.5-14l28-196Z",
        "mouse": "M480-80q-116 0-198-82t-82-198v-240q0-116 82-198t198-82q116 0 198 82t82 198v240q0 116-82 198T480-80Zm40-520h160q0-72-45.5-127T520-796v196Zm-240 0h160v-196q-69 14-114.5 69T280-600Zm200 440q83 0 141.5-58.5T680-360v-160H280v160q0 83 58.5 141.5T480-160Zm0-360Zm40-80Zm-80 0Zm40 80Z",
        "mouse-left": "M 480 -80 a 269.6 269.6 90 0 1 -198 -82 A 269.6 269.6 90 0 1 200 -360 V -600 c 0 -77.2 27.2 -143.2 82 -198 A 269.6 269.6 90 0 1 480 -880 c 77.2 0 143.2 27.2 198 82 A 269.6 269.6 90 0 1 760 -600 v 240 c 0 77.2 -27.2 143.2 -82 198 A 269.6 269.6 90 0 1 480 -80 Z m 40 -520 h 160 c 0 -48 -15.2 -90.4 -45.6 -126.8 A 195.2 195.2 90 0 0 520 -796 V -600 Z m -40 440 c 55.2 0 102.4 -19.6 141.6 -58.4 A 192.8 192.8 90 0 0 680 -360 v -160 H 280 v 160 c 0 55.2 19.6 102.4 58.4 141.6 A 192.8 192.8 90 0 0 480 -160 Z",
        "mouse-right": "M 480 -80 a 269.6 269.6 90 0 1 -198 -82 A 269.6 269.6 90 0 1 200 -360 V -600 c 0 -77.2 27.2 -143.2 82 -198 A 269.6 269.6 90 0 1 480 -880 c 77.2 0 143.2 27.2 198 82 A 269.6 269.6 90 0 1 760 -600 v 240 c 0 77.2 -27.2 143.2 -82 198 A 269.6 269.6 90 0 1 480 -80 Z M 280 -600 h 160 V -796 c -46 9.2 -84 32 -114.4 69.2 A 193.6 193.6 90 0 0 280 -600 Z m 200 440 c 55.2 0 102.4 -19.6 141.6 -58.4 A 192.8 192.8 90 0 0 680 -360 v -160 H 280 v 160 c 0 55.2 19.6 102.4 58.4 141.6 A 192.8 192.8 90 0 0 480 -160 Z",
        "mouse-drag": "M 699.11 -179.11 H 592.06 l 22.98 22.45 a 20.63 20.63 0 0 1 6.26 15.15 c 0 5.91 -2.08 10.96 -6.26 15.14 a 20.63 20.63 0 0 1 -15.14 6.27 a 20.63 20.63 0 0 1 -15.15 -6.27 l -59 -59 a 18.32 18.32 0 0 1 -4.45 -6.8 A 23.13 23.13 0 0 1 520 -200 c 0 -2.78 0.43 -5.4 1.3 -7.83 c 0.88 -2.44 2.36 -4.7 4.44 -6.8 l 59.01 -59 a 20.33 20.33 0 0 1 14.88 -6.27 c 5.75 0 10.7 2.1 14.89 6.27 a 20.33 20.33 0 0 1 6.26 14.88 c 0 5.75 -2.09 10.7 -6.26 14.89 l -22.98 22.97 h 107.57 V -328.46 l -23.5 23.5 c -4.17 4.18 -9.05 6.18 -14.62 6 c -5.57 -0.17 -10.44 -2.34 -14.62 -6.52 a 20.33 20.33 0 0 1 -6.27 -14.89 c 0 -5.74 2.1 -10.7 6.27 -14.88 l 59 -59 a 18.32 18.32 0 0 1 6.8 -4.45 c 2.43 -0.87 5.05 -1.3 7.83 -1.3 c 2.78 0 5.4 0.43 7.83 1.3 c 2.44 0.88 4.7 2.36 6.8 4.44 l 59.52 59.53 c 4.18 4.18 6.27 9.06 6.27 14.63 s -2.1 10.44 -6.27 14.62 a 20.33 20.33 0 0 1 -14.88 6.26 c -5.75 0 -10.7 -2.08 -14.88 -6.26 l -23.5 -22.98 v 107.57 h 107.05 l -22.98 -22.45 a 20.63 20.63 0 0 1 -6.27 -15.15 c 0 -5.91 2.1 -10.96 6.27 -15.14 a 20.63 20.63 0 0 1 15.14 -6.27 c 5.92 0 10.97 2.1 15.15 6.27 l 59 59 a 18.3 18.3 0 0 1 4.44 6.8 A 23.1 23.1 0 0 1 920 -200 c 0 2.78 -0.43 5.4 -1.3 7.83 a 18.3 18.3 0 0 1 -4.44 6.8 l -59.53 59.52 c -4.18 4.18 -9.06 6.18 -14.63 6 c -5.57 -0.17 -10.44 -2.34 -14.62 -6.52 a 20.33 20.33 0 0 1 -6.26 -14.88 c 0 -5.75 2.08 -10.7 6.26 -14.89 l 22.98 -22.97 H 740.89 v 107.05 l 22.45 -22.98 a 20.63 20.63 0 0 1 15.15 -6.26 c 5.91 0 10.96 2.08 15.14 6.26 a 20.63 20.63 0 0 1 6.26 15.14 c 0 5.92 -2.08 10.97 -6.26 15.15 l -59 59 a 18.3 18.3 0 0 1 -6.8 4.44 A 23.1 23.1 0 0 1 720 0 c -2.78 0 -5.4 -0.43 -7.83 -1.3 a 18.3 18.3 0 0 1 -6.8 -4.44 l -59.52 -59.53 a 19.44 19.44 0 0 1 -6 -14.89 a 21.3 21.3 0 0 1 6.52 -14.88 a 20.33 20.33 0 0 1 14.88 -6.26 c 5.75 0 10.7 2.08 14.89 6.26 l 22.97 23.5 V -179.11 Z M 320 -160 c -77.33 0 -143.33 -27.33 -198 -82 c -54.67 -54.67 -82 -120.67 -82 -198 V -680 c 0 -77.33 27.33 -143.33 82 -198 C 176.67 -932.67 242.67 -960 320 -960 s 143.33 27.33 198 82 c 54.67 54.67 82 120.67 82 198 v 240 c 0 77.33 -27.33 143.33 -82 198 c -54.67 54.67 -120.67 82 -198 82 Z m 40 -520 h 160 c 0 -48 -15.17 -90.33 -45.5 -127 S 406 -866.67 360 -876 v 196 Z m -39 440 c 55.33 0 102.5 -19.5 141.5 -58.5 S 520.67 -384.67 520 -440 V -600 H 120 v 160 c 0 55.33 19.5 102.5 58.5 141.5 S 264.67 -240 320 -240 h 1 Z",
        "mac-command": "M260-120q-58 0-99-41t-41-99q0-58 41-99t99-41h60v-160h-60q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99v60h160v-60q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41h-60v160h60q58 0 99 41t41 99q0 58-41 99t-99 41q-58 0-99-41t-41-99v-60H400v60q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T320-260v-60h-60q-25 0-42.5 17.5T200-260q0 25 17.5 42.5T260-200Zm440 0q25 0 42.5-17.5T760-260q0-25-17.5-42.5T700-320h-60v60q0 25 17.5 42.5T700-200ZM400-400h160v-160H400v160ZM260-640h60v-60q0-25-17.5-42.5T260-760q-25 0-42.5 17.5T200-700q0 25 17.5 42.5T260-640Zm380 0h60q25 0 42.5-17.5T760-700q0-25-17.5-42.5T700-760q-25 0-42.5 17.5T640-700v60Z",
        "question-mark": "M584-637q0-43-28.5-69T480-732q-29 0-52.5 12.5T387-683q-16 23-43.5 26.5T296-671q-14-13-15.5-32t9.5-36q32-48 81.5-74.5T480-840q97 0 157.5 55T698-641q0 45-19 81t-70 85q-37 35-50 54.5T542-376q-4 24-20.5 40T482-320q-23 0-39.5-15.5T426-374q0-39 17-71.5t57-68.5q51-45 67.5-69.5T584-637ZM480-80q-33 0-56.5-23.5T400-160q0-33 23.5-56.5T480-240q33 0 56.5 23.5T560-160q0 33-23.5 56.5T480-80Z",
        "touchpad": "M593-80q-24 0-46-9t-39-26L332-292q-11-11-11.5-27.5T331-348l6-6q14-14 34-19t40 0l69 20v-287q0-17 11.5-28.5T520-680q17 0 28.5 11.5T560-640v340q0 20-15.5 31.5T509-262l-47-13 103 103q6 6 13 9t15 3h167q33 0 56.5-23.5T840-240v-160q0-17 11.5-28.5T880-440q17 0 28.5 11.5T920-400v160q0 66-47 113T760-80H593Zm47-280q-17 0-28.5-11.5T600-400v-120q0-17 11.5-28.5T640-560q17 0 28.5 11.5T680-520v120q0 17-11.5 28.5T640-360Zm120 0q-17 0-28.5-11.5T720-400v-80q0-17 11.5-28.5T760-520q17 0 28.5 11.5T800-480v80q0 17-11.5 28.5T760-360Zm0 200H565h195Zm-600-40q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h600q33 0 56.5 23.5T840-760v120q0 17-11.5 28.5T800-600q-17 0-28.5-11.5T760-640v-120H160v480h72q17 0 28.5 11.5T272-240q0 17-11.5 28.5T232-200h-72Z",
        "touchpad-two": "M160-200q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h600q33 0 56.5 23.5T840-760v120q0 17-11.5 28.5T800-600q-17 0-28.5-11.5T760-640v-120H160v480h72q17 0 28.5 11.5T272-240q0 17-11.5 28.5T232-200h-72Zm560-200v-80q0-17 11.5-28.5T760-520q17 0 28.5 11.5T800-480v80q0 17-11.5 28.5T760-360q-17 0-28.5-11.5T720-400Zm40 240H565h195ZM593-80q-24 0-46-9t-39-26L332-292q-11-11-11.5-27.5T331-348l6-6q14-14 34-19t40 0l69 20v-287q0-17 11.5-28.5T520-680q17 0 28.5 11.5T560-640v340q0 20-15.5 31.5T509-262l-47-13 103 103q6 6 13 9t15 3h167q33 0 56.5-23.5T840-240v-160q0-17 11.5-28.5T880-440q17 0 28.5 11.5T920-400v160q0 66-47 113T760-80H593Zm7-320v-280q0-17 11.5-28.5T640-720q17 0 28.5 11.5T680-680v280q0 17-11.5 28.5T640-360q-17 0-28.5-11.5T600-400Z",
        "touch-move": "M 592.8 -40 a 120 120 90 0 1 -84.8 -35.2 L 332 -252 a 36.8 36.8 90 0 1 -11.2 -29.6 c 0.8 -11.6 5.2 -21.6 13.2 -29.2 a 80 80 90 0 1 80 -21.2 l 66 19.2 V -640 c 0 -11.2 4 -20.8 11.6 -28.4 c 7.6 -8 17.2 -11.6 28.4 -11.6 c 11.2 0 20.8 4 28.4 11.6 c 8 7.6 11.6 17.2 11.6 28.4 v 380 c 0 13.2 -5.2 24 -16 32 a 39.2 39.2 90 0 1 -35.2 7.2 l -46 -13.2 l 102 102 c 3.6 3.2 8 6 12.8 8.4 a 36 36 90 0 0 15.2 3.6 H 760 c 22 0 40.8 -8 56.4 -23.6 c 16 -15.6 23.6 -34.4 23.6 -56.4 v -160 c 0 -11.2 4 -20.8 11.6 -28.4 c 7.6 -8 17.2 -11.6 28.4 -11.6 c 11.2 0 20.8 4 28.4 11.6 c 8 7.6 11.6 17.2 11.6 28.4 v 160 c 0 44 -16 81.6 -47.2 112.8 A 154 154 90 0 1 760 -40 h -167.2 Z M 640 -520 c 11.2 0 20.8 4 28.4 11.6 c 8 7.6 11.6 17.2 11.6 28.4 v 120 c 0 11.2 -4 20.8 -11.6 28.4 c -7.6 8 -17.2 11.6 -28.4 11.6 a 38.8 38.8 90 0 1 -28.4 -11.6 A 38.8 38.8 90 0 1 600 -360 v -120 c 0 -11.2 4 -20.8 11.6 -28.4 c 7.6 -8 17.2 -11.6 28.4 -11.6 Z m 120 40 c 11.2 0 20.8 4 28.4 11.6 c 8 7.6 11.6 17.2 11.6 28.4 v 80 c 0 11.2 -4 20.8 -11.6 28.4 c -7.6 8 -17.2 11.6 -28.4 11.6 a 38.8 38.8 90 0 1 -28.4 -11.6 A 38.8 38.8 90 0 1 720 -360 v -80 c 0 -11.2 4 -20.8 11.6 -28.4 c 7.6 -8 17.2 -11.6 28.4 -11.6 Z M 225.6 -579.2 v -68 c 0 -6.4 2.4 -12 6.4 -16 c 4 -4 9.2 -6 15.6 -6 c 6 0 11.2 2 15.2 6.4 c 4 4 6.4 9.2 6.4 15.2 v 68 l 23.2 -24 c 4 -4.4 9.6 -6.4 16 -6.4 c 6 0 11.2 2 15.6 6.4 c 4 4 6.4 9.6 6.4 16 c 0 5.6 -2.4 11.2 -6.4 15.2 l -61.2 61.2 a 19.2 19.2 90 0 1 -7.2 4.8 a 24 24 90 0 1 -16 0 a 19.2 19.2 90 0 1 -7.2 -4.8 L 170.4 -572.8 a 20 20 90 0 1 -6 -15.6 c 0 -5.6 2.4 -10.8 6.8 -15.2 c 4 -4.4 9.2 -6.4 15.2 -6.4 s 11.2 2 15.6 6.4 l 24 24 Z m -110.8 -112 l 24 23.6 c 4 4 6.4 9.6 6.4 16 c 0 6 -2.4 11.2 -6.8 15.6 c -4 4 -9.2 6.4 -15.6 6.4 a 21.2 21.2 90 0 1 -16 -6.4 L 46.4 -697.2 a 19.2 19.2 90 0 1 -4.8 -7.2 a 24 24 90 0 1 -1.2 -8 a 24 24 90 0 1 1.2 -8 a 19.2 19.2 90 0 1 4.8 -7.2 l 61.2 -61.2 c 4 -4.4 9.6 -6.8 15.6 -6.8 c 5.6 0 10.8 2.4 15.2 6.8 c 4 4 6.4 9.2 6.4 15.2 s -2 11.2 -6.4 15.6 l -24 24 h 68.4 c 6 0 11.2 2 15.6 6 c 4 4 6 9.2 6 15.6 a 20.8 20.8 90 0 1 -21.6 21.6 h -68 Z m 266 0 h -68 a 20.8 20.8 90 0 1 -16 -6 a 20.8 20.8 90 0 1 -6 -15.2 c 0 -6.4 2 -11.6 6.4 -15.6 c 4 -4 9.2 -6.4 15.2 -6.4 h 68 l -24 -23.2 a 21.6 21.6 90 0 1 -6.4 -15.6 c 0 -6 2 -11.2 6.4 -16 c 4 -4 9.6 -6.4 16 -6.4 c 5.6 0 11.2 2.4 15.2 6.8 l 61.2 61.2 c 2.4 2 4 4.4 4.8 6.8 a 24 24 90 0 1 0 16.4 a 19.2 19.2 90 0 1 -4.8 7.2 L 387.2 -636 a 20 20 90 0 1 -15.2 6.4 a 22 22 90 0 1 -15.2 -6.8 a 21.2 21.2 90 0 1 -6.4 -15.6 c 0 -6 2 -11.2 6.4 -15.6 l 24 -24 Z M 225.6 -845.2 l -24 24 a 20.8 20.8 90 0 1 -30.4 0 a 21.2 21.2 90 0 1 -6.8 -15.2 c 0 -6 2.4 -11.2 6.8 -15.6 L 232 -914 c 2 -2.4 4.4 -4 6.8 -4.8 a 24 24 90 0 1 8 -1.2 a 24 24 90 0 1 8.4 1.2 c 2.4 1.2 4.8 2.4 7.2 4.8 L 324 -852.4 a 20.8 20.8 90 0 1 0 30.4 c -4 4 -9.6 6.4 -15.6 6.4 a 21.2 21.2 90 0 1 -15.2 -6.4 l -24.4 -24 v 68.4 c 0 6 -2 11.2 -6.4 15.6 c -4 4 -9.2 6 -15.2 6 a 20.8 20.8 90 0 1 -15.6 -6 a 20.8 20.8 90 0 1 -6.4 -15.6 v -68 Z",
        "touch": "M419-80q-28 0-52.5-12T325-126L124-381q-8-9-7-21.5t9-20.5q20-21 48-25t52 11l74 45v-328q0-17 11.5-28.5T340-760q17 0 29 11.5t12 28.5v400q0 23-20.5 34.5T320-286l-36-22 104 133q6 7 14 11t17 4h221q33 0 56.5-23.5T720-240v-160q0-17-11.5-28.5T680-440H501q-17 0-28.5-11.5T461-480q0-17 11.5-28.5T501-520h179q50 0 85 35t35 85v160q0 66-47 113T640-80H419Zm83-260Zm-23-260q-17 0-28.5-11.5T439-640q0-2 5-20 8-14 12-28.5t4-31.5q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 17 4 31.5t12 28.5q3 5 4 10t1 10q0 17-11 28.5T202-600q-11 0-20.5-6T167-621q-13-22-20-47t-7-52q0-83 58.5-141.5T340-920q83 0 141.5 58.5T540-720q0 27-7 52t-20 47q-5 9-14 15t-20 6Z",
        "pinch": "M593-40q-24 0-46-9t-39-26L332-252q-12-12-11-29.5t13-29.5q16-16 37.5-21.5t42.5.5l66 19v-327q0-17 11.5-28.5T520-680q17 0 28.5 11.5T560-640v380q0 20-16 32t-35 7l-46-13 102 102q5 5 12.5 8.5T593-120h167q33 0 56.5-23.5T840-200v-160q0-17 11.5-28.5T880-400q17 0 28.5 11.5T920-360v160q0 66-47 113T760-40H593Zm109-200ZM380-818 142-580h68q13 0 21.5 8.5T240-550q0 13-8.5 21.5T210-520H80q-17 0-28.5-11.5T40-560v-130q0-13 8.5-21.5T70-720q13 0 21.5 8.5T100-690v68l238-238h-68q-13 0-21.5-8.5T240-890q0-13 8.5-21.5T270-920h130q17 0 28.5 11.5T440-880v130q0 13-8.5 21.5T410-720q-13 0-21.5-8.5T380-750v-68Zm260 298q17 0 28.5 11.5T680-480v120q0 17-11.5 28.5T640-320q-17 0-28.5-11.5T600-360v-120q0-17 11.5-28.5T640-520Zm120 40q17 0 28.5 11.5T800-440v80q0 17-11.5 28.5T760-320q-17 0-28.5-11.5T720-360v-80q0-17 11.5-28.5T760-480Z",
        "search": "M380-320q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l224 224q11 11 11 28t-11 28q-11 11-28 11t-28-11L532-372q-30 24-69 38t-83 14Zm0-80q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z",
        "tick": "m382-354 339-339q12-12 28-12t28 12q12 12 12 28.5T777-636L410-268q-12 12-28 12t-28-12L182-440q-12-12-11.5-28.5T183-497q12-12 28.5-12t28.5 12l142 143Z",
        "three-dots": "M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z",
        "grid": "M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h133v-133H200v133Zm213 0h134v-133H413v133Zm214 0h133v-133H627v133ZM200-413h133v-134H200v134Zm213 0h134v-134H413v134Zm214 0h133v-134H627v134ZM200-627h133v-133H200v133Zm213 0h134v-133H413v133Zm214 0h133v-133H627v133Z",
        "disable-grid": "M333-200v-133H200v133h133Zm214 0v-100l-33-33H413v133h134Zm80 0Zm116-133Zm-410-80v-101l-33-33H200v134h133Zm80 0Zm347 0v-134H627v99l35 35h98ZM529-547Zm-329-80Zm347 0v-133H413v98l35 35h99Zm213 0v-133H627v133h133ZM316-760Zm524 525L235-840h525q33 0 56.5 23.5T840-760v525ZM200-120q-33 0-56.5-23.5T120-200v-640l720 720H200Zm591 64L56-792q-11-11-11.5-27.5T56-848q11-11 28-11t28 11l736 736q12 12 11.5 28T847-56q-12 11-28 11.5T791-56Z",
        "github": "M 478.5698 -960 C 213.9331 -960 0 -744.4898 0 -477.8743 c 0 213.12 137.0743 393.5216 327.2327 457.3714 c 23.7747 4.8 32.4833 -10.3739 32.4833 -23.138 c 0 -11.1771 -0.7837 -49.489 -0.7837 -89.4073 c -133.1265 28.7412 -160.849 -57.4727 -160.849 -57.4727 c -21.3943 -55.8759 -53.0939 -70.2367 -53.0939 -70.2367 c -43.5722 -29.5347 3.1739 -29.5347 3.1739 -29.5347 c 48.3331 3.1935 73.6947 49.489 73.6947 49.489 c 42.7788 73.4302 111.7127 52.6824 139.4449 39.9086 c 3.9576 -31.1314 16.6433 -52.6824 30.1127 -64.6531 c -106.178 -11.1771 -217.8906 -52.6824 -217.8906 -237.8743 c 0 -52.6824 19.0041 -95.7845 49.1167 -129.3061 c -4.751 -11.9706 -21.3943 -61.4694 4.7608 -127.7192 c 0 0 40.4082 -12.7739 131.52 49.489 a 460.1143 460.1143 90 0 1 119.6473 -15.9673 c 40.4082 0 81.6 5.5935 119.6376 15.9673 c 91.1216 -62.2629 131.5298 -49.489 131.5298 -49.489 c 26.1551 66.2498 9.502 115.7486 4.751 127.7192 c 30.9061 33.5216 49.1265 76.6237 49.1265 129.3061 c 0 185.1918 -111.7127 225.8939 -218.6841 237.8743 c 17.4367 15.1641 32.4833 43.8955 32.4833 89.3976 c 0 64.6531 -0.7837 116.542 -0.7837 132.4996 c 0 12.7739 8.7184 27.9478 32.4833 23.1576 c 190.1584 -63.8694 327.2327 -244.2612 327.2327 -457.3812 C 957.1298 -744.4898 742.4131 -960 478.5698 -960 z",
        "buy-me-a-coffee": "M 502.983 -516.5235 c -34.4819 14.7565 -73.61 31.4946 -124.3271 31.4946 a 235.3689 235.3689 90 0 1 -62.7715 -8.6543 l 35.0824 360.1389 a 60.1745 60.1745 90 0 0 59.9719 55.2206 s 49.7339 2.582 66.3368 2.582 c 17.864 0 71.4183 -2.582 71.4183 -2.582 a 60.167 60.167 90 0 0 59.9643 -55.2206 l 37.5668 -397.9609 c -16.7906 -5.7345 -33.7314 -9.5475 -52.8413 -9.5475 c -33.0258 -0.015 -59.6491 11.3639 -90.4006 24.5292 Z M 808.4341 -703.412 l -5.2841 -26.6458 c -4.7362 -23.9062 -15.4996 -46.4913 -40.0363 -55.1306 c -7.8661 -2.7697 -16.7906 -3.9556 -22.8178 -9.6751 c -6.0347 -5.7195 -7.8136 -14.6064 -9.2097 -22.8478 c -2.582 -15.1243 -5.0139 -30.2561 -7.656 -45.3579 c -2.2893 -12.9776 -4.0982 -27.5615 -10.0579 -39.4658 c -7.7461 -15.9875 -23.8236 -25.3398 -39.8111 -31.5246 a 229.3041 229.3041 90 0 0 -25.0396 -7.7461 C 608.5754 -952.3515 566.5726 -956.217 525.478 -958.4313 a 1033.0095 1033.0095 90 0 0 -147.9931 2.4544 c -36.6286 3.3326 -75.2088 7.3557 -110.0059 20.0332 c -12.7224 4.6311 -25.8352 10.2005 -35.5027 20.0256 c -11.8743 12.0844 -15.7473 30.7515 -7.078 45.8158 c 6.1548 10.6884 16.588 18.2392 27.6666 23.2457 a 224.3878 224.3878 90 0 0 44.9151 14.6139 c 43.0086 9.5099 87.5484 13.2403 131.4877 14.8316 c 48.698 1.9665 97.4711 0.3753 145.9365 -4.7662 a 830.8991 830.8991 90 0 0 35.893 -4.7437 c 14.066 -2.1542 23.088 -20.5435 18.9448 -33.3561 c -4.9539 -15.312 -18.2918 -21.2566 -33.3636 -18.9448 c -2.2142 0.3453 -4.4285 0.6755 -6.6502 0.9908 l -1.5987 0.2327 a 812.9301 812.9301 90 0 1 -47.0392 4.6011 a 1051.9468 1051.9468 90 0 1 -71.3282 2.4544 c -23.3733 0 -46.7615 -0.6605 -70.0898 -2.1992 c -10.6433 -0.698 -21.2566 -1.5762 -31.8474 -2.6571 c -4.8188 -0.5029 -9.6225 -1.0358 -14.4263 -1.6288 l -4.5711 -0.5855 l -0.9908 -0.1351 l -4.7437 -0.6905 a 499.4027 499.4027 90 0 1 -28.9576 -5.164 a 4.3534 4.3534 90 0 1 0 -8.4966 h 0.1876 a 469.9647 469.9647 90 0 1 25.0696 -4.6011 l 8.4141 -1.291 h 0.0751 c 5.2541 -0.3453 10.5457 -1.291 15.7698 -1.9065 c 45.5081 -4.7362 91.2863 -6.35 137.0195 -4.8338 c 22.1948 0.6455 44.3897 1.9515 66.4869 4.2033 c 4.7512 0.4879 9.4799 1.0058 14.2011 1.5837 c 1.8089 0.2252 3.6328 0.4804 5.4493 0.698 l 3.6779 0.5254 a 508.9426 508.9426 90 0 1 31.8999 5.802 c 15.6873 3.4077 35.818 4.5185 42.7909 21.6919 c 2.2217 5.4568 3.2275 11.514 4.4585 17.2335 l 1.5612 7.2957 a 115281.889 115281.889 90 0 0 11.1837 52.0607 a 9.4574 9.4574 90 0 1 -7.9562 11.3564 h -0.0976 l -2.2668 0.3002 l -2.2292 0.3002 a 1373.0477 1373.0477 90 0 1 -63.2444 6.7177 a 1505.5562 1505.5562 90 0 1 -126.4663 5.089 a 1482.9636 1482.9636 90 0 1 -169.625 -9.8627 c -6.0948 -0.7281 -12.1895 -1.5012 -18.2843 -2.2893 c 4.7287 0.6005 -3.4377 -0.4654 -5.089 -0.698 c -3.873 -0.5404 -7.7461 -1.1034 -11.6266 -1.6888 c -13.0002 -1.9515 -25.9328 -4.3534 -38.9104 -6.455 c -15.6873 -2.5895 -30.699 -1.2985 -44.8851 6.455 a 65.301 65.301 90 0 0 -27.0361 28.0269 c -6.1248 12.6549 -7.9412 26.4357 -10.6808 40.0288 C 151.2432 -703.1493 146.9798 -688.5129 148.5936 -674.552 c 3.4752 30.1285 24.5442 54.6127 54.8378 60.0919 a 1554.9673 1554.9673 90 0 0 85.8971 12.9101 a 1587.3401 1587.3401 90 0 0 367.7798 2.1242 a 19.3726 19.3726 90 0 1 21.3917 21.2341 l -2.8747 27.8693 l -17.331 168.9345 a 134235.3364 134235.3364 90 0 1 -23.3582 227.3301 c -1.6513 16.3928 -1.8915 33.296 -4.9989 49.4937 c -4.9088 25.4674 -22.1498 41.1096 -47.3095 46.8291 a 329.635 329.635 90 0 1 -70.2324 8.2114 c -26.203 0.1426 -52.3909 -1.0208 -78.6014 -0.8782 c -27.9744 0.1576 -62.2386 -2.4244 -83.8255 -23.2457 c -18.9748 -18.2843 -21.5944 -46.9192 -24.1839 -71.681 c -3.4377 -32.7781 -6.8529 -65.5487 -10.238 -98.3193 l -18.9898 -182.2124 l -12.2796 -117.9021 c -0.2027 -1.9515 -0.4128 -3.873 -0.6005 -5.8396 c -1.4787 -14.066 -11.4314 -27.8317 -27.1262 -27.1187 c -13.4355 0.593 -28.6949 12.0094 -27.1187 27.1187 l 9.1046 87.4058 l 18.8247 180.8163 c 5.3667 51.3551 10.7184 102.7177 16.0625 154.0954 c 1.0283 9.8402 1.9966 19.7104 3.0774 29.5506 c 5.9071 53.7795 46.9792 82.7597 97.8314 90.9185 c 29.7082 4.7812 60.137 5.7645 90.2805 6.2524 c 38.6402 0.623 77.6707 2.1091 115.6804 -4.8938 c 56.3165 -10.3356 98.5745 -47.94 104.6092 -106.2755 l 5.164 -50.537 c 5.727 -55.7235 11.4464 -111.4546 17.1509 -167.1856 l 18.6746 -182.0923 l 8.5567 -83.4652 a 19.3651 19.3651 90 0 1 15.6122 -17.0383 c 16.1001 -3.1299 31.4946 -8.4891 42.9486 -20.7462 c 18.2392 -19.5152 21.8646 -44.9601 15.4246 -70.6077 Z M 202.6058 -685.413 c 0.2477 -0.1126 -0.2102 1.9891 -0.3978 2.9723 c -0.0375 -1.4862 0.0375 -2.7997 0.3978 -2.9723 Z m 1.5612 12.0919 c 0.1276 -0.0901 0.5179 0.4278 0.9157 1.0508 c -0.6005 -0.5704 -0.9908 -0.9983 -0.9307 -1.0508 h 0.015 Z m 1.5387 2.0266 c 0.5554 0.9457 0.8557 1.5387 0 0 Z m 3.0849 2.507 h 0.0751 c 0 0.0901 0.1501 0.1801 0.1952 0.2702 a 2.0041 2.0041 90 0 0 -0.2852 -0.2702 h 0.015 Z m 540.5198 -3.7529 c -5.787 5.5093 -14.5088 8.0688 -23.1181 9.3448 c -96.6005 14.3362 -194.6195 21.5944 -292.2783 18.3894 c -69.8946 -2.3869 -139.0536 -10.1479 -208.2577 -19.9281 c -6.7778 -0.9532 -14.126 -2.1917 -18.7872 -7.1906 c -8.7819 -9.4274 -4.4735 -28.4172 -2.1842 -39.8036 c 2.0941 -10.4332 6.0948 -24.349 18.5095 -25.8277 c 19.3651 -2.2743 41.8677 5.8996 61.0377 8.8044 c 23.073 3.5278 46.2361 6.3425 69.4743 8.4591 c 99.22 9.0371 200.0988 7.6335 298.8685 -5.5919 c 18.0066 -2.4169 35.9381 -5.2316 53.817 -8.4366 c 15.9274 -2.8522 33.5812 -8.2114 43.1962 8.279 c 6.6052 11.2363 7.4833 26.2705 6.455 38.9704 a 21.722 21.722 90 0 1 -6.7553 14.5389 h 0.0225 Z",
    };
}

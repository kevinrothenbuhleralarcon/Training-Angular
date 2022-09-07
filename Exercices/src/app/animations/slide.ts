import { animate, style, transition, trigger } from "@angular/animations";

export const slide = trigger("slide", [
    transition(":enter", [
        style({transform: "translateX(-10px)"}),
        animate(500)
    ]),
    transition(":leave", [
        animate(500, style({transform: "translateX(-100%)"}))
    ])
])

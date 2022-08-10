import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: "[autoGrow]",
})
export class AutoGrowDirective {

    constructor(private el: ElementRef) { }

    @HostListener("focus") onFocus() {
        this.el.nativeElement.style.width = "200px"
    }

    @HostListener("blur") onBlur() {
        this.el.nativeElement.style.width = "120px"
    }
}
import modal from "./module/modal";
import tabs from "./module/tabs";

window.addEventListener("DOMContentLoaded", () => {
    modal(".my-modal", ".modal__btn-close", "#my-modal");
    tabs(".tabs-header", ".btn-tabs", ".tabs-content", "active");
})
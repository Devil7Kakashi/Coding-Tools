[decimalBox, binaryBox, octalBox, hexBox].forEach(box => {

    box.addEventListener("focus", () => {
        if(box.value === "0"){
            box.value = "";
        }
    });

    box.addEventListener("blur", () => {
        if(box.value === ""){
            box.value = "0";
        }
    });

});
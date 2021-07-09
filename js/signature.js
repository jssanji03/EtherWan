


$(function () {
   
var canvas = document.querySelector("#signature-pad");
    var signaturePad = new SignaturePad(canvas, {
        minWidth: 2,
        maxWidth: 2,
        backgroundColor: 'rgba(255, 255, 255,0.3)',
        penColor: "rgba(14, 7, 211, 0.88)"
    });
    var first = " "
    $("#redraw").attr("src",first);
    $("#save").click(function (e) {
        const data = signaturePad.toDataURL("image/jpge", 1.0);
        e.stopPropagation();
        // Send data to server instead...
        console.log(data);
        $("#redraw").attr("src", data);
        // $('#SignatureModal').toggle()
 
    });
 
    $("#clear").click(function () {
        signaturePad.clear();
    });
 
    $("#store").click(function () {
        const dataUrl = signaturePad.toDataURL("image/jpge", 1.0);
        storeSignature(dataUrl);
    });

    function storeSignature(parameters) {
        var signature = {
            DataUrl: parameters
        };        
        var jsonData = JSON.stringify(signature);
        $.ajax({
            type: "POST",
            url: '/Home/Signature',
            data: { json: jsonData },
            dataType: "text"
        }).done(function () {
            alert("Data stored.");
        });
    }
});
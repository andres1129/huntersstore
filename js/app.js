const frmHeader = [];
const fmrDetalles = [];
let myHeaders = new Headers({ "Content-Type": "application/json" })
// Función para agregar un encabezado de factura al arreglo
document.querySelector("#agregarHeader").addEventListener("click",(e)=>{
    (e).preventDefault;
    var form = document.querySelector("#frmCabeza");
    let dataHeader = Object.fromEntries(new FormData(form));
    frmHeader.push(dataHeader);
    console.log(frmHeader);
    //document.getElementById("headerForm").reset();
});
document.querySelectorAll("#agregarDetails").addEventListener("click",(e)=>{
    var form = document.querySelector("#detailForm");
    let dataDetail = Object.fromEntries(new FormData(form));
    invoiceDetails.push(dataDetail);
    console.log(invoiceDetails);
    document.getElementById("detailForm").reset();
});


document.querySelector("#agregar").addEventListener("click",e=>{
    let formulario =document.querySelector("#detalles");
    formulario.innerHTML+=/*html*/` 
    <div class="p-3 row">
        <div class="col-3">
            <div class="mb-3">
                <label for="producto" class="form-label">Producto</label>
                <input type="text" name="producto" class="form-control" id="producto">
            </div>
        </div>
        <div class="col-2">
            <div class="mb-3">
                <label class="form-label" for="valor">valor</label>
                <input type="number" name="valor" class="form-control" id="valor">
            </div>
        </div>
        <div class="col-1">
            <div class="mb-3">
                <label class="form-label" for="cantidad">cantidad</label>
                <input type="number" name="cantidad" class="form-control" id="cantidad">
            </div>
        </div>
        <div class="col-2">
            <div class="mb-3">
                <label class="form-label" for="total">total</label>
                <input type="number" name="total" class="form-control" id="total">
            </div>
        </div>
        <div class="col-1">
            <div class="mt-4" >
                <button type="button" class=" bg-success "> + </button>
            </div>
        </div>
        <div class="col-1">
            <div  class="mt-4">
                <button type="button" class="bg-secondary "> - </button>
            </div>
        </div>
        <div class="col-1">
        <div class="mt-4" >
            <button type="button" id="agregarDetails"class="bg-primary ">check </button>
        </div>
    </div>
    <div class="col-1">
        <div  class="mt-4">
            <button type="button" class="bg-danger "> delete </button>
        </div>
    </div>
    </div>
    `
})
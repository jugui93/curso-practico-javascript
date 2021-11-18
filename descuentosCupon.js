function calcularPrecioConDescuento (precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    
    return precioConDescuento;
}

const coupons = [
    { 
        name: "Amor_y_amistad",
        discount: 15,
    },
    {
        name: "Dia_dela_madre",
        discount: 23
    },
    {
        name: "Navidad",
        discount: 33
    }
]

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue
    }
    const userCoupon = coupons.find (isCouponValueValid);

    if (!userCoupon){
        alert("El cupón "+ couponValue +" no es válido");
    }

    else {
        const descuento = userCoupon.discount;
            
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

        const resultPrice = document.getElementById("ResultPrice");
        resultPrice.innerText = `El precio con descuento es: \$${precioConDescuento}`;
    }
}

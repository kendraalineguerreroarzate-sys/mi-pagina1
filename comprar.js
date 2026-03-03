const card = document.getElementById('card');

const numberInput = document.getElementById('number');
const nameInput = document.getElementById('name');
const expiryInput = document.getElementById('expiry');
const cvvInput = document.getElementById('cvv');

const cardNumber = document.getElementById('card-number');
const cardName = document.getElementById('card-name');
const cardExpiry = document.getElementById('card-expiry');
const cardCvv = document.getElementById('card-cvv');


numberInput.addEventListener('input', () => cardNumber.textContent = numberInput.value || '#### #### #### ####');
nameInput.addEventListener('input', () => cardName.textContent = nameInput.value || 'Ingresar nombre');
expiryInput.addEventListener('input', () => cardExpiry.textContent = expiryInput.value || 'MM/AA');
cvvInput.addEventListener('input', () => cardCvv.textContent = cvvInput.value || '###');


cvvInput.addEventListener('focus', () => card.classList.add('flipped'));
cvvInput.addEventListener('blur', () => card.classList.remove('flipped'));
const payBtn = document.getElementById('pay-btn');
const truck = document.getElementById('truck');

payBtn.addEventListener('click', (e) => {
  e.preventDefault(); 

  document.getElementById("mensaje").innerHTML =
  "✅ PAGO EXITOSO ";

document.getElementById("mensaje").style.color = "green";

 
  setTimeout(() => {
      window.location.href = "index.html";
      }, 2000);
});

const btn1 = document.querySelector('#btn1'),
      btn2 = document.querySelector('#btn2')

btn1.addEventListener('click', loadCustomer);
btn2.addEventListener('click', loadCustomers);

function loadCustomer () {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onload = function (){
        if(this.status === 200){
            const customer = JSON.parse(this.responseText);
            document.querySelector('.customer').innerHTML = `
            <ul>
                <li>Name: ${customer.name}</li>
                <li>Company: ${customer.company}</li>
                <li>Phone: ${customer.phone}</li>
            </ul>`
        }
    }
    xhr.send();
}

function loadCustomers () {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);

    xhr.onload = function (){
        if(this.status === 200){

            const customers = JSON.parse(this.responseText);

            let output = '';
            
            customers.forEach(customer => {
                output +=`
                <ul>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>`            
            });
            document.querySelector('.customers').innerHTML = output;
        }
    }
    xhr.send();
}
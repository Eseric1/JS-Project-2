// Load event on window object
window.addEventListener('load', function() {
    // Add event listeners for each radio button
    document.getElementById("book").addEventListener('click', changeItem);
    document.getElementById("pen").addEventListener('click', changeItem);
    document.getElementById("bag").addEventListener('click', changeItem);
    document.getElementById("hat").addEventListener('click', changeItem);
    // Add event listener for compute button
    document.getElementById("compute").addEventListener('click', computeCost);
});

// Function to change item image and description
function changeItem() {
    // Get the image and description elements
    let image = document.getElementById("image");
    let description = document.getElementById("description");
    // Check which radio button is selected and set the image and description accordingly
    if (document.getElementById("book").checked) {
        image.src = "https://th.bing.com/th/id/R.71fbff22e9e33d35ebec211cf9a0db51?rik=p1wJ5MaRFzI34A&riu=http%3a%2f%2fmedia.ruralradio.co%2fwordpress%2f2014%2f10%2fThinkstock_Book.jpg&ehk=dFML13JkNwirLIC2FSmIqgn%2fzDhVjdBYBkIxrmvPuiE%3d&risl=&pid=ImgRaw&r=0";
        description.innerHTML = "To write all those important and neccassry notes. Also Books are awesome. They teach you stuff, make you think, and entertain you. They also help you with your language skills, which are good for school and life. Buy a book and have fun!";
    } else if (document.getElementById("pen").checked) {
        image.src = "https://ae01.alicdn.com/kf/HTB1BLWEL4TpK1RjSZFKq6y2wXXai/1pcs-New-High-Grade-Creative-Metal-Ballpoint-Pens-Upscale-Business-Office-Signing-Pen-8-Colors-Practical.jpg";
        description.innerHTML = "A pen is a simple but powerful tool that can help you express yourself, communicate your ideas, and create your own art. A pen can write, draw, sketch, and doodle on any surface you want. A pen can also inspire you to be creative, imaginative, and original. By buying a pen, you are unlocking your potential and unleashing your inner artist.";
    } else if (document.getElementById("bag").checked) {
        image.src = "https://th.bing.com/th/id/R.dd791512f87d9515937afa9161e265d6?rik=q%2bbPm0xG6ewy9Q&riu=http%3a%2f%2fwww.huntinghandmade.com%2fwp-content%2fuploads%2f2016%2f07%2f5-15-inch-laptop-bag.jpg&ehk=YoyXbtiLU8XXIZqkASYPuMTgip2wakQdCAUZU9mpbWY%3d&risl=&pid=ImgRaw&r=0";
        description.innerHTML = "A bag is more than just a container. It’s a handy and fashionable item that lets you bring your necessities, sort your stuff, and match your style. Whether you need to pack books, laptops, clothes, or snacks, a bag can hold, secure, and move them with ease. Plus, a bag can show off your individuality, preference, and attitude with its look, color, and form. Buying a bag means adding comfort and charm to your everyday life.";
    } else if (document.getElementById("hat").checked) {
        image.src = "https://th.bing.com/th/id/OIP.Ee9KUktE_5JAW7Z-i_1MmgHaE8?pid=ImgDet&rs=1";
        description.innerHTML = "A bucket hat is a trendy accessory that can spice up your look and catch everyone’s eye with its distinctive and whimsical shape. A bucket hat can also suit any ensemble, vibe, or event with its range of designs, and styles. By buying a bucket hat, you are boosting your fun factor.";
    }
}

// Function to compute the cost of the selected item and quantity
function computeCost() {
    // Get the quantity value entered by the user
    let quantity = parseFloat(document.getElementById("quantity").value);
    // Perform data validation to ensure that the value is a number and not negative
    if (isNaN(quantity) || quantity < 0) {
        // Display an error message in a new window
        window.alert("Invalid quantity. Please enter a positive number.");
    } else {
        // Declare a variable to store the cost of the selected item
        let cost;
        // Check which radio button is selected and set the cost accordingly
        if (document.getElementById("book").checked) {
            cost = 10;
        } else if (document.getElementById("pen").checked) {
            cost = 2;
        } else if (document.getElementById("bag").checked) {
            cost = 15;
        } else if (document.getElementById("hat").checked) {
            cost = 8;
        }
        // Compute the total cost by multiplying the quantity and the cost
        let total = quantity * cost;
        // Display a confirm box to ask the user if they want to continue purchasing
        let confirmation = window.confirm(`The total cost is $${total}. Do you want to continue purchasing?`);
        // If the user confirms, display a message in a new window
        if (confirmation) {
            window.alert(`Thank you for your purchase. You have bought ${quantity} ${document.querySelector('input[name="item"]:checked').value}(s) for $${total}.`);
        } else {
            // If the user cancels, display a message in a new window
            window.alert(`You have canceled your purchase.`);
        }
    }
}
Copy
// Get the elements
const loader = document.getElementById("loader");
// const pElement = document.querySelector('.blur-container p');
const wrapper = document.getElementById("wrapper");

// Function to animate the blur effect and zoom-in
function animateEffects() {
  let opacityValue = 0; // Initial opacity value
  const animationInterval = setInterval(() => {
    // Increase opacity values
    opacityValue += 1;

    // Apply the updated values to the image element
    loader.style.opacity = opacityValue;
    // pElement.style.opacity = opacityValue;

    // Stop the animation when blur amount reaches 0
    if (opacityValue >= 0) {
      clearInterval(animationInterval);
      setTimeout(zoomInImage, 7000); // Call the function after 5seconds delay
    }
  }, 50);
}

// Function to animate the zoom-in effect with continuous blur
function zoomInImage() {
  let blurAmount = 0; // Initial blur amount
  let scaleValue = 1; // Initial scale value

  const zoomInterval = setInterval(() => {
    // Increase blur amount and scale value for zoom-in effect
    blurAmount += 1;
    scaleValue += 0.05;
    // Apply the updated scale value and blur effect to the elements
    loader.style.filter = `blur(${blurAmount}px)`;
    loader.style.transform = `scale(${scaleValue})`;
    // pElement.style.filter = `blur(${blurAmount}px)`;
    // pElement.style.transform = `scale(${scaleValue})`;
    // Stop the zoom-in animation when desired blur or scale value is reached
    if (blurAmount >= 20) {
      clearInterval(zoomInterval);
      loader.style.visibility = "collapse";
      loader.style.opacity = 0;
      // pElement.style.visibility = 'collapse';
      // pElement.style.opacity = 0;
      // wrapper.style.visibility = 'visible';
      // wrapper.style.opacity = 1;
      wrapper.style.display = "block";
    }
  }, 20);
}
window.onload = animateEffects;

// // Get the element
// const loader = document.querySelector('.loader');
// const wrapper = document.querySelector('.wrapper');

// // Function to hide the elements and show wrapperDiv after 5 seconds
// function hideElements() {
//     setTimeout(() => {
//         loader.style.display = 'none';
//         wrapper.style.display = 'block';
//     }, 3000);
// }

function initializeTxtFld() {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  // const input = txtFld.querySelector('input');
  const errorMessage1 = document.getElementById("error-message1");
  const errorMessage2 = document.getElementById("error-message2");
  const logIn = document.getElementById("logIn");
  // input.addEventListener('blur', function () {
  //     txtFld.classList.add('invalid');
  //     logIn.style.color = '#afafafea';
  //     logIn.classList.remove('cursor-pointer');
  // });
  // Get the email input element and error message element
  email.addEventListener("blur", function () {
    const isValid = isValidEmail(email.value);
    if (!isValid) {
      logIn.style.color = "#afafafea";
      logIn.classList.remove("cursor-pointer");
      // label1.style.color = "#afafaf";
      email.style.borderColor = "#d63601";
      errorMessage1.classList.remove("hidden");
    } else {
      // label1.style.color = "#1c4980";
      logIn.style.color = "#0073e6";
      logIn.classList.add("cursor-pointer");
      // email.style.borderColor = "#1c4980";
      // errorMessage1.classList.add("hidden");
    }
  });
  email.addEventListener("keyup", function () {
    const isValid = isValidEmail(email.value);
    if (!isValid) {
      email.style.backgroundColor = "#fff";
      email.style.borderColor = "#d63601";
      errorMessage1.classList.remove("hidden");
    }else{
      email.style.backgroundColor = "#E8F0FE";
      errorMessage1.classList.add("hidden");
      email.style.borderColor = "#dadce0";
    }
  });
  // Function to validate email using a regular expression pattern
  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
 
  password.addEventListener("keyup", function () {
    if (password.value === '') {
      password.style.borderColor = "#d63601";
      password.style.backgroundColor = "#fff";
      errorMessage2.classList.remove("hidden");
    }else{
      errorMessage2.classList.add("hidden");
      // password.style.borderColor = "";
      password.style.backgroundColor = "#E8F0FE";
      password.style.borderColor = "#dadce0";
    }
  });

  password.addEventListener("blur", function () {
    if (password.value === '') {
      // label2.style.color = "#afafaf";
      password.style.borderColor = "#d63601";
      // password.style.backgroundColor = "#fff";
      errorMessage2.classList.remove("hidden");
    // } 
    // else {
      // label2.style.color = "#1c4980";
      // password.style.backgroundColor = "#E8F0FE";
      // password.style.borderColor = "#1c4980";
      // errorMessage2.classList.add("hidden");
    } 
  });
  // function isValidPassword(password) {
  //   return password.length >= 8;
  // }
  // const label = document.getElementById("label");
  email.addEventListener("blur", () => {
    let hasTransformed = false;
    document.getElementById("label1");
    if (email.value !== "" && !hasTransformed) {
      label1.style.transform = "translateY(-25px)";
      label1.style.fontSize = "12px";
      hasTransformed = false;
    }
    email.addEventListener("focus", () => {
      // Reset the translation if transformation has occurred
      if (hasTransformed) {
        label1.style.transform = "translateY(0)";
      }
    });
  });

  // let isTranslated = false;

  // email.addEventListener("focus", () => {
  //     if (!isTranslated) {
  //         document.getElementById("email").email.style.transform = "translateY(-25px)";
  //         isTranslated = true;
  //     }
  // });
  // email.addEventListener("blur", () => {
  //     if (isTranslated) {
  //         document.getElementById("email").email.style.transform = "translateY(0)";
  //         isTranslated = false;
  //     }
  // });

  // email.addEventListener('blur', function () {
  //     errorMessage1.classList.remove('hidden');
  // });
  // password.addEventListener('blur', function () {
  //     errorMessage2.classList.remove('hidden');
  // });
}
const txtFlds = document.querySelectorAll(".txt-fld");
txtFlds.forEach(initializeTxtFld);

    function togglePasswordVisibility() {
      const passwordField = document.getElementById("password");
      const togglePassword = document.getElementById("togglePassword");

      if (passwordField.type == "password") {
        passwordField.type = "text";
        togglePassword.style.color = "#1e3050";
        togglePassword.innerHTML = '<i class="fas fa-eye"></i>';
      } 
      else {
        passwordField.type = "password";
        togglePassword.innerHTML = '<i class="fas fa-eye-slash"></i>';
        // Add mouseover event listener to change the label's color
        togglePassword.addEventListener("mouseover", () => {
        togglePassword.style.color = "#1e3050";
        });
        // Add mouseout event listener to reset the label's color
        togglePassword.addEventListener("mouseout", () => {
        togglePassword.style.color = "#afafaf";
        });
        //   passwordField.addEventListener('mouseout', () => {
        //     togglePassword.style.color = "#afafaf";
        // });
      }
    }

function encrypt() {
    let msg = document.getElementById("decrypted").value;
    let encodedMsg = "";
  
    for (let i = 0; i < msg.length; i++) {
      encodedMsg += msg.charCodeAt(i) + "-";
    }
  
    // Remove the trailing dash
    encodedMsg = encodedMsg.slice(0, -1);
  
    document.getElementById("encrypted").value = encodedMsg;
  }
  


  

  function decrypt() {
    let encodedMsg = document.getElementById("encrypted").value;
    let decodedMsg = "";
  
    let encodedArray = encodedMsg.split("-");
    for (let i = 0; i < encodedArray.length; i++) {
      let charCode = parseInt(encodedArray[i]);
      decodedMsg += String.fromCharCode(charCode);
    }
  
    document.getElementById("decrypted").value = decodedMsg;
  }
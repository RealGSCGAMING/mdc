/*
--------------------------------------------

| | ___   ___ | | _(_)_ __   __ _        
| |/ _ \ / _ \| |/ / | '_ \ / _` |       
| | (_) | (_) |   <| | | | | (_| |       
|_|\___/ \___/|_|\_\_|_| |_|\__, |       
  __ _| |_  | |_| |__   ___ |___/        
 / _` | __| | __| '_ \ / _ \             
| (_| | |_  | |_| | | |  __/             
 \__,_|\__|_ \__|_|_|_|\___|_            
/ __|/ _ \| | | | '__/ __/ _ \           
\__ \ (_) | |_| | | | (_|  __/           
|___/\___/ \__,_|_|  \___\___|           
  ___ ___   __| | ___  (_)___            
 / __/ _ \ / _` |/ _ \ | / __|           
| (_| (_) | (_| |  __/ | \__ \           
 \___\___/ \__,_|\___| |_|___/           
  ___| |__   ___  __ _| |_(_)_ __   __ _ 
 / __| '_ \ / _ \/ _` | __| | '_ \ / _` |
| (__| | | |  __/ (_| | |_| | | | | (_| |
 \___|_| |_|\___|\__,_|\__|_|_| |_|\__, |
                                   |___/ 



                             =               
           :::::         =======             
       ::-:::::::      ==+*=****==           
    ::::-:-:::-:::   ==+=========*==         
 :::::::::---:::::: ==*============*==       
    .::::::::::-:--=*==+++++++=======*==     
        ::::::::-....=+++++++++===========   
           :: ::.......+++++++++=====*==***  
               =:........++++++===*==******  
             ==*==.........+++==*==*******   
           ==*======.........=*==*****       
         ==*==.=..====.........=****         
      ========.=.=======......::+:::::::::   
      ##=+*====....=..====...::::::::::::::  
      ###+=*=======:..=====::=::-::-:-:::::  
       ####==+=========*===*:-:::::---:-:::  
         ####=*=======+==**** : :::::--:--:  
          ####+====*===*****       ::::::::  
            ####====+*****         ::::::::  
              ###*******              :::::  
               ###***                     :  

 dP""b8 88  88 888888 888888 .dP"Y8 888888 88""Yb     88 88b 88  dP""b8    
dP   `" 88  88 88__   88__   `Ybo." 88__   88__dP     88 88Yb88 dP   `"    
Yb      888888 88""   88""   o.`Y8b 88""   88"Yb      88 88 Y88 Yb      .o.
 YboodP 88  88 888888 888888 8bodP' 888888 88  Yb     88 88  Y8  YboodP `"'

--------------------------------------------
*/


let pname, contact, story;

let combinedAnswers = "Code1337";

let error = document.getElementById("error");

// SECTION 1 - INFO
{

    let section1 = document.getElementById("section1");
    let s1btn = document.getElementById("s1btn");
    let s1part = 1;

    let nameInp = document.getElementById("name");
    let contactInp = document.getElementById("contact");

    let storyInp = document.getElementById("story");
    let charCount = document.getElementById("charCount");
    charCount.textContent = "Characters: " + storyInp.value.length;

    s1btn.addEventListener("click", function () {

        if (s1part == 1) {
            let tname = nameInp.value;
            let tcontact = contactInp.value;

            s1btn.disabled = true;
            nameInp.disabled = true;
            contactInp.disabled = true;

            s1btn.textContent = "LOADING..."

            if (tname == "" || tcontact == "") {
                alert("Please fill in all of the fields.");
                s1btn.disabled = false;
                nameInp.disabled = false;
                contactInp.disabled = false;
                s1btn.textContent = "SUBMIT";
                return;
            }

            pname = tname;
            contact = tcontact;

            setTimeout(() => {

                storyInp.style.display = "block";
                charCount.style.display = "block";
                nameInp.style.display = "none";
                contactInp.style.display = "none";
                s1btn.textContent = "SUBMIT";
                s1btn.disabled = false;
                s1part = 2;

            }, 100);
        }

        if (s1part == 2) {
            let tstory = storyInp.value;
            storyInp.disabled = true;
            s1btn.disabled = true;
            s1btn.textContent = "LOADING..."

            if (tstory == "" || tstory.length < 25) {
                alert("Please type at least 25 characters.")
                s1btn.disabled = false;
                storyInp.disabled = false;
                s1btn.textContent = "SUBMIT";
                return;
            }

            story = tstory;

            setTimeout(() => {
                section1.style.display = "none";
                section2.style.display = "flex";
            }, 100);
        }

    });

    storyInp.oninput = function () {
        charCount.textContent = "Characters: " + storyInp.value.length;
    };

}

// SECTION 2 - CAPTCHA NOTICE
{
    let section2 = document.getElementById("section2");
    let s2btn = document.getElementById("s2btn");

    s2btn.addEventListener("click", function () {

        s2btn.disabled = true;

        setTimeout(() => {

            s2btn.innerText = "."

        }, 250);

        setTimeout(() => {

            s2btn.innerText = ".."

        }, 500);

        setTimeout(() => {

            s2btn.innerText = "..."

        }, 750);

        setTimeout(() => {

            section2.style.display = "none";
            section3.style.display = "flex";

        }, 1000);
    });
}

let cq = 1;

// SECTION 3 - GAME
{
    let section3 = document.getElementById("section3");
    let s3inp = document.getElementById("s3inp");
    let text = document.getElementById("question");
    let captchaText = document.getElementById("captchaText");

    let questions = [
        "Please type the word \"human\".",
        "Please type the word \"person\".",
        "Please type the word \"being\".",
        "Please type the scientific name for humans.",
        "Please type the first recorded human name in history.", // Question 5
        "Please type the name of the country with the highest human population.",
        "Please type the (generally accepted) number of organs in the human body.",
        "Please type the answer to the following equation: What is 2 + 2?",
        "Please type the answer to the following equation: What is 2 * 3?",
        "Please type the answer to the following equation: What is 6!", // Question 10
        "PLease type the sum of the ANswers to The previous 4 questionS.",
        "Please type the exact chance that you have of winning the Powerball lottery: 1 in ...",
        "Please type whether the following statement is true or false:\nThis statement is true.",
        "Please type whether the following statement is true or false:\nThe previous statement could also be false.",
        "Please type the SHA-256 hash of this question.", // Question 15
        "Please type the name of the CAPTCHA service protecting this form.",
        "Please type the question where the name of the CAPTCHA service changed.",
        "Please type the answer to the question 2 questions before the question where the name of the CAPTCHA service changed.",
        "Please type what the name of the CAPTCHA service was on the previous question.",
        "Please type the word \"robot\" if you are a robot.", // Question 20
        "Please type only the capital letters in the 11th question.",
        "Please type the name of the creature that your response to the previous question often fights in a popular video game series.",
        "Please type the release year of the first game in the aforementioned series.",
        "Please type the sum of the answers to the previous question and question 11.",
        "Please type the secret word.", // Question 25
        "Please type the original retail price of the Balenciaga Trash Pouch in USD. (do not include the dollar sign)",
        "Please type the number of Balenciaga Trash Pouches you could buy if you had an amount of money equal to the chance you have of winning the Powerball lottery.",
        "Please type the number of questions you have answered so far.",
        "Please type the sum of all numeric answers in this form.",
        "Finally, please type the name you entered at the beginning of this form." // Question 30
    ];

    let answers = [
        "79a5478768d2447431a90f7f4549df735f50ad541371464c248abc7522dc3a01",
        "38a81e87e79631e602bf5fbd307ce2fcd382b1670c585ea09032aac778a80531",
        "85574fa07dae32132675e21676042035c1b8a8384e11cd430269cff53f29add1",
        "8f72567cf7899ec323ccd07740125fb28e927582343ad1d7a7587518d9126bd8",
        "b8ee12eec49f1c84dd80cec8dde5f7dfd1ad01f58b75ea6373a1669deca51089", // Question 5
        "fb54e9062429a93785559529beda15c55f62c29be22267811c0e8346c14846d3",
        "349c41201b62db851192665c504b350ff98c6b45fb62a8a2161f78b6534d8de9",
        "4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a",
        "e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683",
        "d829857eb1366e70be857a69886d1555af0d32681beab068afb93492c2e2b843", // Question 10
        "d72a11d264e746464ed45f73e1ec058e33ad40270c79324be171932d834d11f3",
        "a99da4a18752e6b3e707632c0a0913a99f39d459ebb621ba1791f573cb751fd0",
        "b5bea41b6c623f7c09f1bf24dcae58ebab3c0cdd90ad966bc43a45b44867e12b",
        "fcbcf165908dd18a9e49f7ff27810176db8e9f63b4352213741664245224f8aa",
        "15988982e0344679780d5e6f58110c139bc9f4063c0086fb286a62cd85840f00", // Question 15
        "75f8cb483e5a24d36cc51ae9d94b9eef13d65878b2c30f19df69b3c0bd635ba9",
        "6d8d11508e52b09b64154b97d1c46a4ca73825ce74cc8f088b6507bcacbc000c",
        "8f72567cf7899ec323ccd07740125fb28e927582343ad1d7a7587518d9126bd8",
        "e43b45632b83e203af9bb2db684c08fff5e0088044f5e0ff6e06c25066bf288d",
        "79a5478768d2447431a90f7f4549df735f50ad541371464c248abc7522dc3a01", // Question 20
        "8b6bfe00f00345950da703a9a970d891d328b08f378c186dec232133ef62af19",
        "49460b7bbbd3aad3f2cba09864f5e8b01a220ea8c077e9fa996de367e7984af0",
        "f37f3f2b0dc57a86dee4ba6ff855283bb4d2f0dea1c5bd1b708853444c2ffcec",
        "8202c37e994f4722947e63d7fa9193fc924fe0d3ea11f7fba2fbf11ef6bab963",
        "0437321e2beac1dc9785ced39a815794127e692e88421f720a24e0318d30908f", // Question 25
        "61dd8cd59a50bdaed10cc8e749b8015d81ed830a990e255186f44dae78d6d20f",
        "70a72ef7a87a16669fd72f8a867af3600b52d99ec16b0c0a2734f1469f121ed3",
        "670671cd97404156226e507973f2ab8330d3022ca96e0c93bdbdb320c41adcaf",
        "7d2ec4b6ac2644071157f29dfde5745479ca2faa66d696d052465654afdd78be",
        "0cdd777af018e8d2bac8a3b4e086b323f4d6ebd245c591fbfaba2cd76990795a"  // Question 30
    ];

    text.innerText = questions[cq - 1];

    let t;

    s3inp.addEventListener("input", async function () {

        let i = s3inp.value.toLowerCase();
        let a = answers[cq - 1];

        if (await checkAnswer(i, a)) {

            s3inp.disabled = true;

            setTimeout(async () => {

                let i = s3inp.value.toLowerCase();

                if (await checkAnswer(i, a)) {

                    if (cq != 30) {
                        combinedAnswers += s3inp.value;
                        console.log(combinedAnswers);
                    }

                    clearTimeout(t);

                    cq++;

                    if (questions[cq - 1] != null) {
                        text.innerText = questions[cq - 1];

                        if (cq == 6) {
                            section3.style.display = "none";

                            setTimeout(() => {
                                captchaText.innerText = "🔒 Protected by reCATATATHA"
                                section3.style.display = "flex";
                                s3inp.focus();
                            }, 10);

                        }

                        else if (cq == 7) {

                            section3.style.display = "none";

                            setTimeout(() => {
                                captchaText.innerText = "🔒 Protected by reCAPATACHA"
                                section3.style.display = "flex";
                                s3inp.focus();
                            }, 10);

                        }

                        else if (cq == 16) {
                            captchaText.innerText = "🔒 Protected by [REDACTED]"
                        }

                        else if (cq == 17) {
                            captchaText.innerText = "🔒 Protected by reCAPATACHA"
                        }

                        else if (cq == 18) {
                            captchaText.innerText = "🔒 Protected by reOAPATACH4"
                        }

                        else if (cq == 19) {
                            captchaText.innerText = "🔒 Protected by reCAPATACHA"
                        }

                        else if (cq == 20) {
                            t = setTimeout(() => {
                                text.innerText += "\nYou may also type the word \"human\" if you are a human.";
                            }, 5000);
                        }

                        else if (cq == 25) {
                            t = setTimeout(() => {
                                text.innerText += "\nHint: It can be found somewhere on this website.";
                            }, 7500);
                        }

                        else if (cq == 28) {
                            t = setTimeout(() => {
                                text.innerText += "\nHint: The count starts after you click the \"I'm not a robot\" button.";
                            }, 7500);
                        }

                        else if (cq == 31) {
                            captchaComplete();
                        }
                    }

                    else {
                        text.innerText = "Failed to load question."
                    }

                    s3inp.value = "";
                    s3inp.disabled = false;
                    s3inp.focus();
                }

                else {
                    s3inp.disabled = false;
                }

            }, 100);
        }

        if (cq == 20 && await hash(s3inp.value.toLowerCase()) == "18d63be10ad544a04a22c944dee01d6d864ec69b797a58edae92e6a44ad8fdbf") {
            s3inp.disabled = true;
        }

        if (cq == 30 && await hash(s3inp.value.toLowerCase()) == await hash(pname.toLowerCase())) {
            captchaComplete();
        }

    });
}

function captchaComplete() {
    section3.style.backgroundColor = "lightgreen";
    s3inp.disabled = true;
    setTimeout(() => {
        section3.style.display = "none";
        section4.style.display = "flex";
    }, 2000);

}

// SECTION 4 - CAPTCHA COMPLETE
{
    let section4 = document.getElementById("section4");
    let s4btn = document.getElementById("s4btn");

    s4btn.addEventListener("click", function () {
        updateInfo();
        section4.style.display = "none";
        section5.style.display = "flex";
    });
}

// SECTION 5 - CONFIRMATION
{
    let section5 = document.getElementById("section5");
    let s5btn1 = document.getElementById("s5btn1");
    let s5btn2 = document.getElementById("s5btn2");

    s5btn1.addEventListener("click", function () {
        section5.style.display = "none";
        section6.style.display = "flex";
    });

    s5btn2.addEventListener("click", function () {
        alert("Oops! Please fill out another Claim Form to correct your information.");
        window.location.reload();
    })
}

// SECTION 6 - SUBMISSION
{
    let section6 = document.getElementById("section6");
    let s6btn = document.getElementById("s6btn");
    let loadingDiv = document.getElementById("loading");
    let loadingBar = document.getElementById("lbar");

    s6btn.addEventListener("click", function () {
        s6btn.disabled = true;
        loadingDiv.style.display = "block";

        setTimeout(() => {
            loadingBar.textContent = "🟩⬛⬛⬛⬛⬛⬛⬛⬛⬛";
        }, 500);

        setTimeout(() => {
            loadingBar.textContent = "🟩🟩⬛⬛⬛⬛⬛⬛⬛⬛";
        }, 1000);

        setTimeout(() => {
            loadingBar.textContent = "🟩🟩🟩⬛⬛⬛⬛⬛⬛⬛";
        }, 2000);

        setTimeout(() => {
            loadingBar.textContent = "🟩🟩🟩🟩⬛⬛⬛⬛⬛⬛";
        }, 3000);

        setTimeout(() => {
            loadingBar.textContent = "🟩🟩🟩🟩🟩⬛⬛⬛⬛⬛";
        }, 5000);

        setTimeout(() => {
            loadingBar.textContent = "🟩🟩🟩🟩🟩🟩⬛⬛⬛⬛";
        }, 7500);

        setTimeout(() => {
            loadingBar.textContent = "🟩🟩🟩🟩🟩🟩🟩⬛⬛⬛";
        }, 10000);

        setTimeout(() => {
            loadingBar.textContent = "🟩🟩🟩🟩🟩🟩🟩🟩⬛⬛";
        }, 13000);

        setTimeout(() => {
            loadingBar.textContent = "🟩🟩🟩🟩🟩🟩🟩🟩🟩⬛";
        }, 17000);

        setTimeout(() => {
            loadingBar.textContent = "🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩";
        }, 23000);

        setTimeout(() => {
            loadingBar.textContent = "✅✅✅✅✅✅✅✅✅✅";
        }, 24000);

        setTimeout(() => {
            section6.style.display = "none";
            section7.style.display = "flex";
            showCompletionCode();
            changingText();
        }, 25000);
    });
}

// SECTION 7 - SUCCESS
{
    let section7 = document.getElementById("section7");
    let s7btn = document.getElementById("s7btn");

    s7btn.addEventListener("click", function () {
        window.location.href = "index.html"
    });
}

let infoBox = document.getElementById("information");

function updateInfo() {
    infoBox.innerText = "Name: " + pname + "\nContact: " + contact
}

function changingText() {

    let t = document.getElementById("changing");

    setInterval(() => {
        t.innerText = Math.floor(Math.random() * 99990) + 10;
    }, 100);
}

async function showCompletionCode() {

    let ccodeb = document.getElementById("completionCode");

    ccodeb.innerText = await hash(combinedAnswers);
}

window.addEventListener("load", function () {
    error.style.display = "none"
    section1.style.display = "flex"
});

async function checkAnswer(input, answerHash) {

    let h = await hash(input);

    if (h == answerHash) {
        return true;
    }
    else {
        return false;
    }
}

async function hash(input) {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);

    const hashBuffer = await crypto.subtle.digest("SHA-256", data);

    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");

    return hashHex;
}
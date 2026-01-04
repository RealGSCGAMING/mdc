let name, contact, story;

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

            name = tname;
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
        "b0fef621727ff82a7d334d9f1f047dc662ed0e27e05aa8fd1aefd19b0fff312c", // Question 25
        "61dd8cd59a50bdaed10cc8e749b8015d81ed830a990e255186f44dae78d6d20f",
        "70a72ef7a87a16669fd72f8a867af3600b52d99ec16b0c0a2734f1469f121ed3",
    ];

    text.innerText = questions[cq - 1];

    let t;

    s3inp.addEventListener("input", async function () {

        let i = s3inp.value.toLowerCase();
        let a = answers[cq - 1];

        if (await checkAnswer(i, a)) {

            s3inp.disabled = true;

            setTimeout(() => {

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
                }

                else {
                    text.innerText = "Failed to load question."
                }

                s3inp.value = "";
                s3inp.disabled = false;
                s3inp.focus();

            }, 100);
        }

        if (cq == 20 && await hash(s3inp.value.toLowerCase()) == "18d63be10ad544a04a22c944dee01d6d864ec69b797a58edae92e6a44ad8fdbf") {
            s3inp.disabled = true;
        }

    });
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
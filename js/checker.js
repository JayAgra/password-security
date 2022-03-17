 (function (doc) {
                var passwordInput = doc.getElementById("password-box"),
                    timeDiv = doc.getElementById("password-time"),
                    checksList = doc.getElementById("password-checks");

                // Code to render the time returned by HSIMP
                var renderTime = function (time, input) {
                    timeDiv.innerHTML = time || "";
                };

                var renderChecks = function (checks, input) {
                    checksList.innerHTML = "";
                    for (var i = 0, l = checks.length; i < l; i++) {
                        var division = doc.createElement("div"),
                            title = doc.createElement("h2"),
                            message = doc.createElement("p");


                        title.innerHTML = checks[i].name;
                        division.appendChild(title);
                        division.setAttribute("class","col-6 col-12-medium")

                        message.innerHTML = checks[i].message;
                        division.appendChild(message);

                        checksList.appendChild(division);

                    }
                };

                var attachTo = hsimp({
                    options: {
                        calculationsPerSecond: 10e9, // 10 billion calculations per second
                        good: 31557600e9, // 1 billion years
                        ok: 31557600e3 // 1 thousand years
                    },
                    outputTime: renderTime,
                    outputChecks: renderChecks
                });
                
                hsimp.setDictionary({
                    "instantly": "Immediately",
                    "forever": "Almost Forever",
                });

                attachTo(passwordInput);
            }(this.document));
            
            
            
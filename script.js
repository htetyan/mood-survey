//Script to collect form data 
    let form = document.getElementById('survey-form');

          form.addEventListener('submit', function(myEvent) {
          myEvent.preventDefault() //prevents form from autosubmitting

          let username = document.getElementById('name').value;

          console.log(username);

          let email = document.getElementById('email').value;

          console.log(email);

          let age = document.getElementById('age').value;

          console.log(age);

          let getRole = document.getElementById('dropdown');
          let getRoleValue = getRole.options[getRole.selectedIndex].value;

          console.log(getRoleValue);

          let radioArray = [];

          function getRadioVal(radioName) {
            var rads = document.getElementsByName(radioName);

            for(var rad in rads) {
              if(rads[rad].checked) {
                let value = parseInt(rads[rad].value);
                radioArray.push(value);
              }
              
            }

            return null;
          };

          for (let i = 1; i < 11; i++) {
            let nameString = `user-answer${i}`;
            //console.log(nameString);
            getRadioVal(nameString);
          };

          console.log(radioArray);

          const reduceSum = (previous, current) =>  previous + current;

          let totalMood = radioArray.reduce(reduceSum);

          console.log(totalMood);

          })
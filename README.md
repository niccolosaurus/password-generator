![password-generator](https://github.com/niccolosaurus/password-generator/blob/main/assets/password-generator.PNG?raw=true)
First a variable for the contents of the passwords are established. They need to contain lowercase and uppercase letters as well as numbers and symbols to be secure. I combines the upper and lower case letters into one variable for simplicitys sake, and then I gave symbols and numbers their own variables as well.
For my length variable I creted a prompt to appear so that the user can input how long they want the password to be. I also put an alert to pop-up if the password is less than 8 characters or more than 128.
I then created a bunch of confirm prompts so that the user can go through and tell the passowrd generator what they want in their password, i.e. upper/lowercase, symbols, and numbers.
![length prompt](https://github.com/niccolosaurus/password-generator/blob/main/assets/password-generator-length.PNG?raw=true)
![uppercase prompt](https://github.com/niccolosaurus/password-generator/blob/main/assets/password-generator-uppercase.PNG?raw=true)
![lowercase prompt](https://github.com/niccolosaurus/password-generator/blob/main/assets/password-generator-lowercase.PNG?raw=true)
![number prompt](https://github.com/niccolosaurus/password-generator/blob/main/assets/password-generator-numbers.PNG?raw=true)
![symbol prompt](https://github.com/niccolosaurus/password-generator/blob/main/assets/password-generator-symbols.PNG?raw=true)
I then created an array so that I could combine all my variable strings into one an array.
If the user on the confirm pop-up clicks that they want that added into their password, that variable will then be added into the array.
But to make sure that they ont just get a strong of '0-9' I used the split function so that it creates a single input for every character. I then used the flat function so that it puts all those strings into an array.
I define the password
I then create a for loop so that a password can be randomly generated from all the potential characters.
Once it is generated we want it to showup in the textbox, so the user can copy it and paste it wherever they may need it.
![generated password](https://github.com/niccolosaurus/password-generator/blob/main/assets/password-generator-password.PNG?raw=true)
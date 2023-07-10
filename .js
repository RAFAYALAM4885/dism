
        function login()
        {
            var name ="rafay"
            var password ="4885"



            var username = document.getElementById("name").value
            var userpass = document.getElementById("password").value
            
            if(name==username && password==userpass)
            {
                location.assign('const.html')
            }
            else{
                document.write("NOT MATCH FIELD");
            }
        }
   
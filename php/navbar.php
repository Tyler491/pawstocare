<?php
    session_start();
?>

<!--Navigation bar-->
<nav class="container-fluid navbar navbar-expand-md navbar-custom sticky-top d-flex" >
    <!--Navagation bar toggler-->     
    <div class="mr-auto">
        <button class="navbar-toggler navbar-dark" data-toggle="collapse" data-target="#navbar_target">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>

    <!--Navagation bar links-->
    <div class="collapse navbar-collapse mr-auto mx-3" id="navbar_target">
        <ul class="navbar-nav nav-fill">
            <li class="nav-item mx-2 active"><a href="index.php" class="nav-link text-white">Home</a></li>
            <li class="nav-item mx-2"><a href="about.php" class="nav-link text-white">About</a></li>
            <li class="nav-item mx-2"><a href="contact.php" class="nav-link text-white">Contact</a></li>
<?php
                if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true && $_SESSION['admin'] == true) {
                    echo <<<EOT
                    <li class="nav-item mx-2"><a href="owners.php" class="nav-link text-white">Owners</a></li>
                    <li class="nav-item dropdown mx-2">
                        <a class="nav-link dropdown-toggle text-white" href="#" data-toggle="dropdown" data-target="dropdownTarget">Animals
                            <span class="caret"></span>
                        </a>
                        <div class="dropdown-menu " aria-labelledby="dropdownTarget" >
                            <a href="dogs.php" class="dropdown-item text-white">Dogs</a>
                            <div class="dropdown-divider"></div>
                            <a href="cats.php" class="dropdown-item text-white">Cats</a>
                            <div class="dropdown-divider"></div>
                            <a href="exotics.php" class="dropdown-item text-white">Exotics</a>
                        </div>
                    </li>
                    
EOT;
                }
                else if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {
                    echo '<li class="nav-item mx-2"><a href="pets.php" class="nav-link text-white">Pets</a></li>';
                }
?>
        </ul>


<?php
    if (!isset($_SESSION['loggedin'])) {
        echo <<<EOT
            <ul class="navbar-nav nav-fill navbar-dark">
                <li class="dropdown" id="menuLogin">
                    <a style="color:white;" class="dropdown-toggle" href="#" data-toggle="dropdown" id="navLogin">Login</a>
                    <div class="dropdown-menu" style="padding:17px;">
                    <form class="form" id="formLogin" action="php/login.php" method="POST"> 
                        <input name="username" id="username" type="text" placeholder="Username"> 
                        <input name="password" id="password" type="password" placeholder="Password"><br>
                        <input type="submit" value="Login" class="btn">
                    </form>
                    </div>
                </li>
            </ul>
EOT;
    }
?>
<?php 
    if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {
        echo "<a style=\"color: white;\" class=\"btn\" href=\"php/logout.php\">Logout</a>";
    }
?>
    </div>
    <div>

    <!--Navagation bar text-->

        <span class="navbar-text text-nowrap mx-5 text-white"><b>Paws to Care</b></span>
    </div>
    <!--Navagation bar brand logo-->
    <div>
        <a class="navbar-brand"><img src="../images/logo.png" alt="Paws to Care logo."></a>
    </div>
</nav>



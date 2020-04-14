$(document).ready(function () {


    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    function checkMenu(){
    var screen = findBootstrapEnvironment();

    if(screen == "md" ||  screen == "sm" || screen == "xs") {
      $('#sidebar').addClass('active');
      $('#content').addClass('active');
    } else {
      $('#sidebar').removeClass('active');
      $('#content').removeClass('active');
    }
}

checkMenu();
$(window).on('resize', checkMenu);

});

function findBootstrapEnvironment() {
    let envs = ['xs', 'sm', 'md', 'lg', 'xl'];

    let el = document.createElement('div');
    document.body.appendChild(el);

    let curEnv = envs.shift();

    for (let env of envs.reverse()) {
        el.classList.add(`d-${env}-none`);

        if (window.getComputedStyle(el).display === 'none') {
            curEnv = env;
            break;
        }
    }

    document.body.removeChild(el);
    return curEnv;
}

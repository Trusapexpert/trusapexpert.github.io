document.addEventListener('DOMContentLoaded',function(){
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');
    // Simple mailto fallback for a static site
    const subject = encodeURIComponent('Website contact from ' + name);
    const body = encodeURIComponent(message + '\n\nFrom: ' + name + ' <' + email + '>');
    window.location.href = 'mailto:info@trusapexpert.com?subject=' + subject + '&body=' + body;
  });
});
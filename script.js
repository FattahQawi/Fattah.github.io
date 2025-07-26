const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Cegah pengiriman default dulu

    const name = form.querySelector('input[name="fullName"]');
    const email = form.querySelector('input[name="email"]');
    const subject = form.querySelector('input[name="pesanEmail"]');
    const message = form.querySelector('textarea[name="pesan"]');

    // Validasi sederhana
    if (!name.value || !email.value || !subject.value || !message.value) {
        alert('Please fill all required fields!');
        return;
    }

    // Simulasi animasi loading
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i> Sending...';
    submitBtn.disabled = true;

    // Delay agar animasi terlihat, lalu submit form sebenarnya
    setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        form.submit(); // Kirim form ke formsubmit.co
    }, 1500);
});

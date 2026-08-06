function showToast(message, status, duration = 3000){
    const messages = ['App added to HopTab!', 'App removed from HopTab!', 'Addition not possible'];
    const statuses = ['success', 'failure'];
    const toast = document.getElementById('toast');

    toast.textContent = messages[message];
    toast.className = statuses[status];
    toast.hidden = false;
}
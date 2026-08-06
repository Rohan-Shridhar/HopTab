function showToast(status, message, duration = 3000){
    const messages = ['App added!', 'App removed!', 'Addition not possible!', 'Duplicate app found!'];
    const statuses = ['success', 'failure'];
    const toast = document.getElementById('toast');

    toast.textContent = messages[message];
    toast.className = statuses[status];
    toast.hidden = false;

    setInterval(() => {
        toast.hidden = true;
    }, duration);
}
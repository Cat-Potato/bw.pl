var animationEnabled = true;
        function toggleAnimation() {
            if (animationEnabled) {
                document.body.style.animation = 'none';
                animationEnabled = false;
            } else {
                document.body.style.animation = 'gradient-background 5s infinite';
                animationEnabled = true;
            }
        }
        function openModal() {
            document.getElementById('myModal').style.display = "block";
        }
        function closeModal() {
            document.getElementById('myModal').style.display = "none";
        }
        function disableAnimation() {
            document.body.style.animation = 'none';
        }
        function openAuthorModal() {
            document.getElementById('authorModal').style.display = "block";
        }
        function closeAuthorModal() {
            document.getElementById('authorModal').style.display = "none";
        }

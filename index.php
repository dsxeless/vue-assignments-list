<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue Example</title>
    <script src="https://unpkg.com/vue@3"></script>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    
    <div id="app"></div>
    
    <script type="module">
        
        import App from './js/components/App.js';
        
        Vue.createApp(App).mount("#app");
        
    </script>

</body>
</html>

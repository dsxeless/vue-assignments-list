<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue Example</title>
    <script src="https://unpkg.com/vue@3"></script>
    <style>
        body {
            height: 100vh;
            display: flex; 
            justify-content: center; 
            align-items: center;
            flex-direction: column;
        }
        h1 {
            margin: 0;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            margin: 5px 0; 
            display: flex; 
            align-items: center;
        }
    </style>
</head>
<body>
    
    <div id="app"></div>
    
    <script type="module">
        
        import App from './js/components/App.js';
        
        Vue.createApp(App).mount("#app");
    </script>

</body>
</html>

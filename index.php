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
        background-color: #f4f4f4; 
        font-family: Arial, sans-serif; 
    }
    h1 {
        margin: 20px 0;
        color: #333; 
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        margin: 5px 0; 
        display: flex; 
        align-items: center;
        background-color: #fff; 
        border-radius: 5px; 
        padding: 10px; 
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
        transition: background-color 0.3s; 
    }
    li:hover {
        background-color: #e0e7ff;
    }
    input[type="checkbox"] {
        margin-left: 10px; 
    }
    section {
        margin: 20px;
        width: 300px; 
        background-color: #ffffff; 
        border-radius: 8px; 
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 15px; 
    }
    section h1 {
        font-size: 18px;
        color: #4a5568;
    }
    .completed {
        text-decoration: line-through;
        color: #aaa;
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

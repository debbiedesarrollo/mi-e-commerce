const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());


app.get('/api/products', (req, res) => {
  const products = [
    { 
      id: 1, 
      name: 'Licuadora', 
      oldPrice: 900, 
      price: 500, 
      urlImg: 'https://st1.uvnimg.com/dims4/default/5fff976/2147483647/thumbnail/1024x576%3E/quality/75/?url=https%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fassets%2Fvixes%2F1%2F11-electrodomesticos-que-necesitas-si-te-quieres-ir-a-vivir-solo1_0.jpg'
    },
    {
      id: 2, 
      name: 'Microondas',  
      oldPrice: 500, 
      price: 100, 
      urlImg: 'https://st1.uvnimg.com/dims4/default/469dffd/2147483647/thumbnail/1024x576%3E/quality/75/?url=https%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fassets%2Fvixes%2F1%2F11-electrodomesticos-que-necesitas-si-te-quieres-ir-a-vivir-solo2_0.jpg' 
    },
    { 
      id: 3, 
      name: 'Pochoclera',  
      oldPrice: 1500, 
      price: 1000, 
      urlImg: 'https://st1.uvnimg.com/dims4/default/2c41e9e/2147483647/thumbnail/1024x576%3E/quality/75/?url=https%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fassets%2Fvixes%2F1%2F11-electrodomesticos-que-necesitas-si-te-quieres-ir-a-vivir-solo3_0.jpg' 
    },
    
  ];

  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
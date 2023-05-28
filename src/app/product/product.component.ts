import {
  Component,
  OnInit
} from '@angular/core';
import {
  Product
} from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  products: Product[] = [{
      image: "assets/garlic.jpg",
      title: "Garlic Slip Knots",
      price: "$10",
      description: "Succulent, greasy, salty goodness.",
      url: "https://buy.stripe.com/dR67upbkA8c7gec288"
    },
    {
      image: "assets/meat.jpg",
      title: "Meat Supremacy",
      price: "$30",
      description: "Yes. It's exactly what you think it is.",
      url: "https://buy.stripe.com/00g01X9csdwr9PObIJ"
    },
    {
      image: "assets/veg.jpg",
      title: "Veggie Pie",
      price: "$20",
      description: "Ewww. Don't buy this. Please.",
      url: "https://buy.stripe.com/3cscOJ0FW0JF5zydQS"
    },
  ];
}
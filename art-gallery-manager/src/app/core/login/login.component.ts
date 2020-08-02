import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  returnUrl:string;

  constructor( private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    let token = "iwoehfkj879ijf879";
    localStorage.setItem('token', token);

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    console.log(this.returnUrl);
    this.router.navigate([this.returnUrl]);

  }
}

import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-escrever-post',
  templateUrl: './escrever-post.component.html',
  styleUrls: ['./escrever-post.component.scss']
})
export class EscreverPostComponent {
  form: FormGroup;

  constructor(private service: PostService) {
    this.form = new FormGroup({
      titulo: new FormControl('', Validators.required),
      texto: new FormControl('', Validators.required),
      check: new FormControl(''),
    });
    
  }

  onSubmit() {
    if(this.form.valid)
    {
      this.service.createPost(this.form.value).subscribe((res: any) => {
        
        if(res.post_id)
        {
          window.location.href = `http://localhost:4200/post/${res.post_id}`;
        }
      });
    }
  }
}

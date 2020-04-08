import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Router } from '@angular/router';
import { Global } from 'src/app/services/global';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {

  public article: Article;
  public status: string;
  public afuConfig: any;
  public url: string;
  public pageTitle: string;
  public isEditable:boolean;
  public tools: object = {
        type: 'Expand',
        items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
    'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
    'LowerCase', 'UpperCase', '|',
    'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
    'Outdent', 'Indent', '|',
    'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
    'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
    };
  constructor(
    private _articleService: ArticleService,
    private _router: Router
  ) {

    this.isEditable = false;
    this.pageTitle = 'Nuevo';
    this.article = new Article('', '', '', null, null);
    this.url = Global.url;

    this.afuConfig = {
      multiple: false,
      formatsAllowed: '.jpg,.png,.gif,.jpeg',
      maxSize: '50', // MB
      uploadAPI:  {
        url: this.url + 'upload-image/'
      },
      theme: 'attachPin',
      hideProgressBar: true,
      hideResetBtn: true,
      hideSelectBtn: false,
      replaceTexts: {
        // selectFileBtn: 'Select Files',
        resetBtn: 'Reset',
        uploadBtn: 'Upload',
        dragNDropBox: 'Drag N Drop',
        attachPinBtn: 'Sube la imagen del artículo..',
        afterUploadMsg_success: 'Successfully Uploaded !',
        afterUploadMsg_error: 'Upload Failed !'
      }
   };
  }

  ngOnInit(): void {
  }

  submit() {
    this._articleService.create(this.article).subscribe(
      res => {
        if (res.success === true) {
          Swal.fire({
            title: 'Creado!',
            text: 'Artículo creado',
            icon: 'success',
            confirmButtonText: 'OK'

          });
          this.status = 'ok';
          this.article = res.articleStored;
          this._router.navigate(['/blog']);
        } else {
          this.status = 'Error';
        }
      },
      error => {
        this.status = error;
      }
     );
  }

  imageUpload(data) {
    let imageData = JSON.parse(data.response);
    this.article.image = imageData.image;
  }

}

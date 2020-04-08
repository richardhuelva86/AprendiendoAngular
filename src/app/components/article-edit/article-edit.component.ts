import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Global } from 'src/app/services/global';
import { ToolbarService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService, ToolbarService, HtmlEditorService]
})
export class ArticleEditComponent implements OnInit {

  public article: Article;
  public url: string;
  public afuConfig: any;

  private _id: string;
  public isEditable: boolean;
  public pageTitle: string;

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
    private _router: Router,
    private _route: ActivatedRoute,
  ) { 
    this.article = new Article("", "", "", null, null);
    this.isEditable = true;
    this.pageTitle = 'Editar';
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
    this.getArticle();
  }

  submit() {
    this._articleService.update(this._id, this.article).subscribe(
      resp => {
        if (!resp.articleUpdated) {
            Swal.fire({text: 'error, artículo inexistente'});
        } else {
          this._router.navigate(['/blog']);
        }
      },
      error => {
            Swal.fire({text: error});
      }
    );
  }

  imageUpload(data) {
    let imageData = JSON.parse(data.response);
    this.article.image = imageData.image;
  }
  getArticle() {
    this._route.params.subscribe(params => {
      this._id = params['id'];
      this._articleService.getArticle(this._id).subscribe(resp => {
        if (!resp.article) {
            Swal.fire({text: 'error, artículo inexistente' });
        } else {
          this.article = resp.article;
        }
      },
      error => {
        Swal.fire({text: error});
      });

    });
  }
}

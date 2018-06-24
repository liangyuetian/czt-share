import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// delon
import { AlainThemeModule } from '@delon/theme';
import { DelonABCModule } from '@delon/abc';
import { DelonACLModule } from '@delon/acl';
import { DelonFormModule } from '@delon/form';
// i18n
import { TranslateModule } from '@ngx-translate/core';

// region: third libs
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CountdownModule } from 'ngx-countdown';
import { UEditorModule } from 'ngx-ueditor';
import { NgxTinymceModule } from 'ngx-tinymce';

// 自定义组件
import { P1Component } from './czt-share/ppt-page/p1/p1.component';
import { P2Component } from './czt-share/ppt-page/p2/p2.component';
import { P3Component } from './czt-share/ppt-page/p3/p3.component';
import { P4Component } from './czt-share/ppt-page/p4/p4.component';
import { P5Component } from './czt-share/ppt-page/p5/p5.component';
import { P6Component } from './czt-share/ppt-page/p6/p6.component';
import { P7Component } from './czt-share/ppt-page/p7/p7.component';
import { P8Component } from './czt-share/ppt-page/p8/p8.component';
import { P9Component } from './czt-share/ppt-page/p9/p9.component';
import { P20Component } from './czt-share/ppt-page/p20/p20.component';
import { P10Component } from './czt-share/ppt-page/p10/p10.component';
import { P11Component } from './czt-share/ppt-page/p11/p11.component';
import { P12Component } from './czt-share/ppt-page/p12/p12.component';
import { P13Component } from './czt-share/ppt-page/p13/p13.component';
import { P14Component } from './czt-share/ppt-page/p14/p14.component';
import { P15Component } from './czt-share/ppt-page/p15/p15.component';
import { P16Component } from './czt-share/ppt-page/p16/p16.component';
import { P17Component } from './czt-share/ppt-page/p17/p17.component';
import { P18Component } from './czt-share/ppt-page/p18/p18.component';
import { P19Component } from './czt-share/ppt-page/p19/p19.component';
import { P21Component } from './czt-share/ppt-page/p21/p21.component';
import { P22Component } from './czt-share/ppt-page/p22/p22.component';
import { P23Component } from './czt-share/ppt-page/p23/p23.component';
import { P24Component } from './czt-share/ppt-page/p24/p24.component';
import { P25Component } from './czt-share/ppt-page/p25/p25.component';
import { P26Component } from './czt-share/ppt-page/p26/p26.component';
import { P27Component } from './czt-share/ppt-page/p27/p27.component';
import { P28Component } from './czt-share/ppt-page/p28/p28.component';
import { P29Component } from './czt-share/ppt-page/p29/p29.component';
import { P30Component } from './czt-share/ppt-page/p30/p30.component';
import { P31Component } from './czt-share/ppt-page/p31/p31.component';
// region: your componets & directives
const COMPONENTS = [
    P1Component,
    P2Component,
    P3Component,
    P4Component,
    P5Component,
    P6Component,
    P7Component,
    P8Component,
    P9Component,
    P10Component,
    P11Component,
    P12Component,
    P13Component,
    P14Component,
    P15Component,
    P16Component,
    P17Component,
    P18Component,
    P19Component,
    P20Component,
    P21Component,
    P22Component,
    P23Component,
    P24Component,
    P25Component,
    P26Component,
    P27Component,
    P28Component,
    P29Component,
    P30Component,
    P31Component,
];
const DIRECTIVES = [];

const THIRDMODULES = [
    NgZorroAntdModule,
    CountdownModule,
    UEditorModule,
    NgxTinymceModule,
];
// endregion

// endregion

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        AlainThemeModule.forChild(),
        DelonABCModule,
        DelonACLModule,
        DelonFormModule,
        // third libs
        ...THIRDMODULES,
    ],
    declarations: [
        // your components
        ...COMPONENTS,
        ...DIRECTIVES,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        AlainThemeModule,
        DelonABCModule,
        DelonACLModule,
        DelonFormModule,
        // i18n
        TranslateModule,
        // third libs
        ...THIRDMODULES,
        // your components
        ...COMPONENTS,
        ...DIRECTIVES,
    ],
})
export class SharedModule { }

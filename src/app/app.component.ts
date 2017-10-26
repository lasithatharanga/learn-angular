import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'දස මහා යෝදයෝ';
  selectedHero: Hero;
  heroes = HEROES;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
export class Hero {
  id: number;
  name: string;
  description: string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'නන්ද්‍රමිත්‍ර', description: 'දස මහා යෝධයන්ගෙන් එළාර රජුගේ සේනාවෙහි සෙන්පතියෙකු වූ මිත්ත ගේ බෑණනුවන් වීම නිසා මයිළනුවන් අනුව යමින් නම් ලද, නන්දිමිත්‍ර විය යුතුය. සැම තැන දණගා බඩගා යෑම වලක්වනු වස්, කුඩා මිත්ත කුරහන්ගලකට බැඳ දමා තිබුනද, ඔහුගේ මහත් ශක්තියෙහි බල මහිමයෙන් මහ බරැති කුරහන් ගලද ඇදගෙන තැන තැන යෑමට සමත් වීම, ඔහු හට නන්දිමිත්‍ර යන නම පටබැඳීමට හේතු කාරක වීලු. මහාවංශ විස්තරය දක්වන අන්දමට නන්දිමිත්‍ර ඉන් ඉක්බිතිව උත්තම තෙරුවන් නමැදූ රජෙකු හට සේවය කරනු වස් රෝහණ දේශයට ගමන් කලේය (මහාවංශ, පරිච්ඡේදය 23, පාඨය 4-15)– ‍යන විශ්වාසමාත්‍රය බොහෝ ශාස්ත්‍රධරයන් විසින් ප්‍රශ්නාංකයට ලක් කරමින් තර්ක කරනුයේ, දමිළ ප්‍රවේණිය හමුවේ වුවද, එළාර වුවද බෞද්ධ සිද්ධස්ථාන සංවර්ධනයෙහි ලා පුරෝගාමීව කටයුතු කල බවය '},
  { id: 12, name: 'සුරනිමල', description: 'මහාවංශයට අනුව (පරිච්ඡේදය 23,පාඨය 16-44) නිමල,කොට්ටිවාල ප්‍රදේශයෙහි කණ්ඩකවිත්තික ග්‍රාමයෙහි,සම්හ නමැති ගම්-ප්‍රධානියෙකුගේ සත්වැනි පුත්‍රයා විය. තුරුණු වියෙහි වූ නිමල, කාවන්තිස්ස රජුගේ සුළු රැජිනකගේ පුත්‍රයෙකු වූ දීඝාභය කුමරුගේ සේවය සඳහා යවනු ලැබීය.කච්චකතිත්ථ නමැති තොටු‍පළ ප්‍රදේශය පාලනය කල දීඝාභය,ද්වාරමණ්ඩල ග්‍රාමයේ චේතිය කන්ද අසල විසූ කුණ්ඩලි නම් බ්‍රාහ්මණයෙකු වෙත දූත මෙහෙවරක් සඳහා, නිමල යැව්වේය.කච්චකතිත්ථ සිට ද්වාරමණ්ඩල දක්වා වූ යොදුන් දහඅටකට වැඩි මෙම විශාල දුර තරණය කොට, ඉන් පසු තිසා වැවේ ස්නානය කරනු වස් අනුරාධපුරයටද ගොස්,බ්‍රාහ්මණයා විසින් ත්‍යාග කල බොහෝ වටිනා පුණ්ණවද්දන වස්ත්‍රද අතැතිව නැවත කච්චකතිත්ථ හි තම ස්වාමීවූ කුමරු වෙත පැමිණීමට නිමල හට ගතවූයේ එක් දිනක් පමණි.නිමල මින් ඉක්බිතිව,සුර-නිමල යන නම් ලැබීය.'},
  { id: 13, name: 'මහාසෝන', description: 'මහාවංශයට [පරිච්ඡේදය 23, පාඨය 45-48] අනුව මහාසෝන යෝධයා, කුළුම්බරී ප්‍රදේශයේ හුන්දරිවාපි ග්‍රාමයේ තිස්ස නමැත්තාට දාව අටවැනි පුතු ලෙස උපත ලබා ඇත. ‍එකල සෝන ලෙස හැඳින්වුනු ‍දස වියැති කොළුවා, ‘විසල් තල්-ගස්’ මුලිනුදුරා දැමීමට තරම් ශක්තිමත් වූ බවත්, පසුව ඇතුන් දස දෙනෙකුගේ ශක්තිය දැරූ බවද කියැවේ.'},
  { id: 14, name: 'ගෝඨයිම්බර', description: 'මහාවංශයට (පරිච්ඡේදය 23, පාඨය 49-54) අනුව ගෝඨයිම්බර උපන්නේ, ගිරි ප්‍රදේශයේ නිත්තුලවිත්තික ග්‍රාමයේ මහානාග නමැත්තාගේ සත්වන පුතු ලෙසය. වංශ කථාව පවසන්නේ, මිටි බව නිසාවෙන්, ගෝඨක නම්වූ කොළුගැටයා, ඉම්බර කැලයක් තනිවම උදුරා මුලිනුපුටා දැමූ හෙයින් ගෝඨ-ඉම්බර ලෙස නම් ලැබූ බවය.'},
  { id: 15, name: 'ථෙරපුත්තාභය', description: 'කොට කන්ද අසබඩ කිට්ටි ග්‍රාමයේ ගම්පති වූ රෝහණ නමැති ගෘහපතියාට දාව උපන් ගෝඨාභය, දස වස් හෝ දොළොස් වස් වන විට, පැසුණු මිනිසුන් සතර හෝ පස් දෙනෙකුට එසවිය නොහැකි මහා පාෂාණ ඔසවා වීසි කිරීමට සමත් වී ඇත. ගෝඨාභයගේ පියාණන් වූ රෝහණ, මහාසුම්ම නමැති තෙරණුවන්ගේ අනුග්‍රාහකයාව සිට තෙරණුවන්ගේ දහම් දෙසුමකට සවන් දී සෝවාන් නම් පළමු ඵලයට පත්වීලු. රෝහණ පසු කලෙක භික්ෂුවක ලෙස පැවදි බව ලැබ පසුව අරහත් ඵලයට පත් වීම නිසා, ගෝඨාභය ඉන්ඉක්බිතිව තෙරණුවන්ගේ පුතු ලෙස අරුත් දෙන ථෙර-පුත්-අභය ලෙස හැඳින්වීමට ඇරඹී තිබේ (මහාවංශය, පරිච්ඡේදය 23, පාඨය 55-63).'},
  { id: 16, name: 'මහාභරණ', description: 'මහාවංශයට (පරිච්ඡේදය 23, පාඨය 64-67) අනුව භරණ උපත ලැබ ඇත්තේ කෝපකන්දර ග්‍රාමයේ කුමාර නමැත්තෙකුට දාවය. අවුරුදු දහයක හෝ දොළසක කොළුවෙකුව සිටියදී, වනයේ සාවුන් එලවාගෙන ගොස් උන් අල්වා පයින් මැඬීමට සමත් වූ බවද, පසුව දහසය විය වූ විට දිව ගොස් කුරුමුවන්, ගෝනුන් හා වල්-හූරන් දඩයම් කිරීමට සමත් වූ බැවින්, මහත් යෝධයෙකු බවට පිළිගැනුමට ලක් වූ බව කියැවේ.'},
  { id: 17, name: 'වේළුසුමන', description: 'වේළුසුමන යෝධයා, ගිරි ප්‍රදේශයෙහි කුටුම්බියාන්ගන හි වසභ නමැති ගෘහපතියාගේ පුතකු වූ අතර, පියාගේ මිතුරන් වන වේළු හා – ගිරි හි ආණ්ඩුකාර ව සිටි – සුමන යන්නන්ගේ නම් අනුව නම ලැබීය. වෙන කිසියම් පුද්ගලයෙකුට පිට නැග හික්මවාගත නොහැකි වූ, ආණ්ඩුකරුට හිමිවූ සින්දු (සින්ධාවා – ඉන්දු රටෙන්) අශ්වයෙකු පිටනැග යෑමට තරුණ වේළුසුමන සමත් වී ඇත. වේළුසුමන මෙම සත්ත්වයා හීලෑ කරගත්තා පමණක් නොව, පිම්මේ වටයට ගමන් කිරීම කොපමන වේගයෙන් සිදුකලාදැයි කිවහොත් අසරුවන් මාලාවක් ගමන් කරන විලසක් දිස්වූ බව කියැවේ (මහාවංශය, පරිච්ඡේදය 23, පාඨය 68-77).'},
  { id: 18, name: 'කච්චදේව', description: 'නකුලනාග පුදේශයෙහි මාහිසදෝනික ග්‍රාමයෙහි අභය නමැත්තාගේ බාලම පුතු ලෙස උපතේදී දේව යන නම් ලැබීය. මදක් කොරගැසීම නිසා කච්චදේව යන නම පටබැඳී ඇත. විශාල කුළුහරකුන් හඹා ගොස්, උන් වලගයෙන් අල්වා, ඔහුගේ හිසට උඩින් කරකවා පොළොවට ගසා දැමීමට මෙම තරුණ කොළුවා සමත් වී ඇත'},
  { id: 19, name: 'ඵුස්සදේව', description: 'මහාවංශය (පරිච්ඡේදය 23, පාඨය 82-89) අනුව, සිට්ඨලපබ්බත විහාරය අසබඩ ගවිට නම් ග්‍රාමයේ, උප්පල නමැත්තාගේ පුතු ලෙස ඵුස්සදේව මෙලොව එළිය දැක ඇත. කොළුවෙකු ලෙස විහාරය වෙත ගිය ඵුස්සදේව හට හක්ගෙඩිය, හෙණ හඬ තරම් ශබ්දයකින් ලෙස පිඹීමට හැකිවීම නිසා, උම්මාදඵුස්සදේව ලෙස නම් ලැබීය. පසුව ඵුස්සදේව, කිසිදා ඉලක්කය නොවරදන දුනුවායෙක් බවට පත් විය.'},
  { id: 20, name: 'ලභියවසභ', description: 'ථුලධර කන්ද අසල, විහාරවාපි ග්‍රාමයෙහි ගෘහපති මත්තගේ පුතු ලෙස උපන් වසභ, ලභියවසභ – (දක්ෂකම්) ලාභි වසභ – ලෙස නම් ලැබුවේ ඔහුගේ මහත් ශරීර ශක්තිය හේතුවෙනි. විසිවන වියෙහි පසුවුනු වසභ, මිනිසුන් දොළොසකු විසින් පවා ගෙනගිය නොහැකි පස් කන්දරාවක් කිසිදු වෙහෙසක් නොදරමින්ම තනිවම ගෙනගොස් වසභ-වැව තැනීමට දායක වී ඇත (මහාවංශය, පරිච්ඡේදය 23, පාඨ‍ය 90-95).'}
 
];

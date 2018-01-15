var originalName = Game.bakeryName;
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var glitch_a = ['a','A','à','À','á','Á','â','Â','ä','Ä','ã','Ã','å','Å','ā','Ā','4'];
var glitch_b = ['b','B','8','ß','฿'];
var glitch_c = ['c','C','ç','Ç','ć','Ć','č','Č','¢','€','₡','©'];
var glitch_d = ['d','D'];
var glitch_e = ['e','E','3','è','È','é','É','ê','Ê','ë','Ë','ē','Ē','ė','Ė','ę','Ę','£'];
var glitch_f = ['f','F'];
var glitch_g = ['g','G'];
var glitch_h = ['h','H'];
var glitch_i = ['i','I','î','Î','ï','Ï','í','Í','ī','Ī','į','Į','ì','Ì','1','l','!'];
var glitch_j = ['j','J'];
var glitch_k = ['k','K'];
var glitch_l = ['l','L','ł','Ł'];
var glitch_m = ['m','M','nn'];
var glitch_n = ['n','N','ñ','ń','Ñ','Ń','₦'];
var glitch_o = ['o','O','ô','Ô','ö','Ö','ò','Ò','ó','Ó','ø','Ø','ō','Ō','õ','Õ','0'];
var glitch_p = ['p','P','℗','₽','₱'];
var glitch_q = ['q','Q'];
var glitch_r = ['r','R','®'];
var glitch_s = ['s','S','5','$','§','ś','Ś','š','Š'];
var glitch_t = ['t','T','7','₮',''];
var glitch_u = ['u','U','û','Û','ü','Ü','ù','Ù','ú','Ú','ū','Ū'];
var glitch_v = ['v','V'];
var glitch_w = ['w','W','VV'];
var glitch_x = ['x','X'];
var glitch_y = ['y','Y','ÿ','Ÿ','¥'];
var glitch_z = ['z','Z','2','Ž','ž','ż','Ż','ź','Ź','ⓩ'];
var glitch_space = [' ','_','-','.'];
function glitch() {
    Game.bakeryName=originalName.replace('a'.toUpperCase(),glitch_a[rand(0,16)]).replace('b'.toUpperCase(),glitch_b[rand(0,4)])
                                .replace('c'.toUpperCase(),glitch_c[rand(0,11)]).replace('d'.toUpperCase(),glitch_d[rand(0,1)])
                                .replace('e'.toUpperCase(),glitch_e[rand(0,17)]).replace('f'.toUpperCase(),glitch_f[rand(0,1)])
                                .replace('g'.toUpperCase(),glitch_g[rand(0,1)]).replace('h'.toUpperCase(),glitch_h[rand(0,1)])
                                .replace('i'.toUpperCase(),glitch_i[rand(0,4)]).replace('j'.toUpperCase(),glitch_j[rand(0,1)])
                                .replace('k'.toUpperCase(),glitch_k[rand(0,1)]).replace('l'.toUpperCase(),glitch_l[rand(0,3)])
                                .replace('m'.toUpperCase(),glitch_m[rand(0,2)]).replace('n'.toUpperCase(),glitch_n[rand(0,6)])
                                .replace('o'.toUpperCase(),glitch_o[rand(0,16)]).replace('p'.toUpperCase(),glitch_p[rand(0,4)])
                                .replace('q'.toUpperCase(),glitch_q[rand(0,1)]).replace('r'.toUpperCase(),glitch_r[rand(0,2)])
                                .replace('s'.toUpperCase(),glitch_s[rand(0,7)]).replace('t'.toUpperCase(),glitch_t[rand(0,4)])
                                .replace('u'.toUpperCase(),glitch_u[rand(0,11)]).replace('v'.toUpperCase(),glitch_v[rand(0,1)])
                                .replace('w'.toUpperCase(),glitch_w[rand(0,2)]).replace('x'.toUpperCase(),glitch_x[rand(0,1)])
                                .replace('y'.toUpperCase(),glitch_y[rand(0,4)]).replace('z'.toUpperCase(),glitch_z[rand(0,8)])
                                .replace(' '.toUpperCase(),glitch_space[rand(0,2)])
    Game.bakeryNameRefresh();
}
setInterval(glitch, 30);

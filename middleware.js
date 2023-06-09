import { NextResponse } from "next/server";

export function middleware(req) {

    // const user = req ? req.cookies : null;
    // const { pathname } = req.nextUrl;
  
    //   if (pathname.includes('/login') || pathname.includes('/static')) {
    //     return NextResponse.next();
    //   }
      
    //   if (!user && pathname !== '/login') {
    //     const url = req.nextUrl.clone();
    //     url.pathname = '/login';
    //     return NextResponse.redirect(url);
    //   }

    // return NextResponse.next()
}

// Açıklama!!

// Bu özel middleware işlevinde, gelen isteğin üzerindeki JWT (JSON Web Token) kimlik doğrulama işlemini gerçekleştiriyoruz. İşlev, gelen isteğin req parametresini alır.

// İşlev içinde, istekteki token'ı kontrol ediyoruz. İlk olarak, token'ı alıyoruz ve aynı zamanda istekteki URL'nin pathname özelliğini de alıyoruz.

// Daha sonra, pathname içinde "/api/login" veya "/static" geçiyorsa, bu isteği doğrudan geçiriyoruz (NextResponse.next()). Bu, "/api/login" veya "/static" yolunda yapılan isteklerin işlenmeye devam etmesini sağlar.

// Ancak, token yoksa ve pathname "/login" değilse, isteği "/login" yoluna yönlendiriyoruz (NextResponse.redirect(url)). Böylece, kimlik doğrulama gerektiren sayfalara erişmeye çalışan kullanıcıları otomatik olarak giriş yapmaya yönlendirmiş oluruz.

// Son olarak, koşulların hiçbirine uymuyorsa, yani token varsa veya pathname "/login" ise, isteği işlemeye devam ediyoruz (NextResponse.next()).

// Bu şekilde, middleware işlevi, kimlik doğrulama gerektiren sayfalara erişimi kontrol etmek için kullanılabilir ve yönlendirme işlemleri yapabilir.
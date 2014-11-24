/*! Copyright (c) SESHENGHUO.COM - Author: LIJUN - Email: zwlijun@gmail.com - Git: https://github.com/zwlijun/se.lib */
/*! Copyright (c) 2010 Mario Klingemann */
define(function(require,exports,module){function a(a,b,f,g){if(!(isNaN(g)||1>g)){g|=0;var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F=a.data,G=g+g+1,H=b-1,I=f-1,J=g+1,K=J*(J+1)/2,L=new c,M=L;for(j=1;G>j;j++)if(M=M.next=new c,j==J)var N=M;M.next=L;var O=null,P=null;n=m=0;var Q=d[g],R=e[g];for(i=0;f>i;i++){for(w=x=y=z=o=p=q=r=0,s=J*(A=F[m]),t=J*(B=F[m+1]),u=J*(C=F[m+2]),v=J*(D=F[m+3]),o+=K*A,p+=K*B,q+=K*C,r+=K*D,M=L,j=0;J>j;j++)M.r=A,M.g=B,M.b=C,M.a=D,M=M.next;for(j=1;J>j;j++)k=m+((j>H?H:j)<<2),o+=(M.r=A=F[k])*(E=J-j),p+=(M.g=B=F[k+1])*E,q+=(M.b=C=F[k+2])*E,r+=(M.a=D=F[k+3])*E,w+=A,x+=B,y+=C,z+=D,M=M.next;for(O=L,P=N,h=0;b>h;h++)F[m+3]=D=r*Q>>R,0!=D?(D=255/D,F[m]=(o*Q>>R)*D,F[m+1]=(p*Q>>R)*D,F[m+2]=(q*Q>>R)*D):F[m]=F[m+1]=F[m+2]=0,o-=s,p-=t,q-=u,r-=v,s-=O.r,t-=O.g,u-=O.b,v-=O.a,k=n+((k=h+g+1)<H?k:H)<<2,w+=O.r=F[k],x+=O.g=F[k+1],y+=O.b=F[k+2],z+=O.a=F[k+3],o+=w,p+=x,q+=y,r+=z,O=O.next,s+=A=P.r,t+=B=P.g,u+=C=P.b,v+=D=P.a,w-=A,x-=B,y-=C,z-=D,P=P.next,m+=4;n+=b}for(h=0;b>h;h++){for(x=y=z=w=p=q=r=o=0,m=h<<2,s=J*(A=F[m]),t=J*(B=F[m+1]),u=J*(C=F[m+2]),v=J*(D=F[m+3]),o+=K*A,p+=K*B,q+=K*C,r+=K*D,M=L,j=0;J>j;j++)M.r=A,M.g=B,M.b=C,M.a=D,M=M.next;for(l=b,j=1;g>=j;j++)m=l+h<<2,o+=(M.r=A=F[m])*(E=J-j),p+=(M.g=B=F[m+1])*E,q+=(M.b=C=F[m+2])*E,r+=(M.a=D=F[m+3])*E,w+=A,x+=B,y+=C,z+=D,M=M.next,I>j&&(l+=b);for(m=h,O=L,P=N,i=0;f>i;i++)k=m<<2,F[k+3]=D=r*Q>>R,D>0?(D=255/D,F[k]=(o*Q>>R)*D,F[k+1]=(p*Q>>R)*D,F[k+2]=(q*Q>>R)*D):F[k]=F[k+1]=F[k+2]=0,o-=s,p-=t,q-=u,r-=v,s-=O.r,t-=O.g,u-=O.b,v-=O.a,k=h+((k=i+J)<I?k:I)*b<<2,o+=w+=O.r=F[k],p+=x+=O.g=F[k+1],q+=y+=O.b=F[k+2],r+=z+=O.a=F[k+3],O=O.next,s+=A=P.r,t+=B=P.g,u+=C=P.b,v+=D=P.a,w-=A,x-=B,y-=C,z-=D,P=P.next,m+=b}return a}}function b(a,b,f,g){if(!(isNaN(g)||1>g)){g|=0;var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B=a.data,C=g+g+1,D=b-1,E=f-1,F=g+1,G=F*(F+1)/2,H=new c,I=H;for(j=1;C>j;j++)if(I=I.next=new c,j==F)var J=I;I.next=H;var K=null,L=null;n=m=0;var M=d[g],N=e[g];for(i=0;f>i;i++){for(u=v=w=o=p=q=0,r=F*(x=B[m]),s=F*(y=B[m+1]),t=F*(z=B[m+2]),o+=G*x,p+=G*y,q+=G*z,I=H,j=0;F>j;j++)I.r=x,I.g=y,I.b=z,I=I.next;for(j=1;F>j;j++)k=m+((j>D?D:j)<<2),o+=(I.r=x=B[k])*(A=F-j),p+=(I.g=y=B[k+1])*A,q+=(I.b=z=B[k+2])*A,u+=x,v+=y,w+=z,I=I.next;for(K=H,L=J,h=0;b>h;h++)B[m]=o*M>>N,B[m+1]=p*M>>N,B[m+2]=q*M>>N,o-=r,p-=s,q-=t,r-=K.r,s-=K.g,t-=K.b,k=n+((k=h+g+1)<D?k:D)<<2,u+=K.r=B[k],v+=K.g=B[k+1],w+=K.b=B[k+2],o+=u,p+=v,q+=w,K=K.next,r+=x=L.r,s+=y=L.g,t+=z=L.b,u-=x,v-=y,w-=z,L=L.next,m+=4;n+=b}for(h=0;b>h;h++){for(v=w=u=p=q=o=0,m=h<<2,r=F*(x=B[m]),s=F*(y=B[m+1]),t=F*(z=B[m+2]),o+=G*x,p+=G*y,q+=G*z,I=H,j=0;F>j;j++)I.r=x,I.g=y,I.b=z,I=I.next;for(l=b,j=1;g>=j;j++)m=l+h<<2,o+=(I.r=x=B[m])*(A=F-j),p+=(I.g=y=B[m+1])*A,q+=(I.b=z=B[m+2])*A,u+=x,v+=y,w+=z,I=I.next,E>j&&(l+=b);for(m=h,K=H,L=J,i=0;f>i;i++)k=m<<2,B[k]=o*M>>N,B[k+1]=p*M>>N,B[k+2]=q*M>>N,o-=r,p-=s,q-=t,r-=K.r,s-=K.g,t-=K.b,k=h+((k=i+F)<E?k:E)*b<<2,o+=u+=K.r=B[k],p+=v+=K.g=B[k+1],q+=w+=K.b=B[k+2],K=K.next,r+=x=L.r,s+=y=L.g,t+=z=L.b,u-=x,v-=y,w-=z,L=L.next,m+=b}return a}}function c(){this.r=0,this.g=0,this.b=0,this.a=0,this.next=null}var d=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259],e=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];module.exports={getRGBAData:a,getRGBData:b}});
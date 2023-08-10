DEPLOYED HERE: https://timely-cranachan-620e09.netlify.app

# Dynamic (E-Commerce Website)
Dynamic은 스포츠용 다양한 제품을 전문으로 제공하는 전자상거래 웹사이트입니다. 이 웹사이트는 React, Redux, styled-components를 사용하였으며, 상태 관리를 위해 hooks를 활용합니다. 애플리케이션은 백엔드 서비스를 위해 Firebase와 통합되어 있으며 결제 처리를 위해 Stripe와 연동되어 있습니다. 웹사이트는 Netlify에 배포되어 있습니다.

## Features
- 회원가입 및 로그인: 고객은 웹사이트 내에서 회원가입을 하거나 구글 계정으로 계정을 생성하고 로그인할 수 있습니다.

- Product listing: 운동 용품 카탈로그를 종목별인 테니스, 축구, 야구, 농구, 미식축구로 분류하여 표시합니다. <br>

- Shopping cart: 고객은 제품을 장바구니에 담을 수 있으며, 수량을 수정하거나 결제를 진행할 수 있습니다. <br>

- 결제 시스템: 결제를 안전하게 처리하기 위해 Stripe를 웹사이트에 사용하였습니다.<br>

- Contact form: 고객은 메세지나 요구사항 등을 contact을 통해 관리자의 이메일로 전송할 수 있습니다.<br>

## What I've learn & complementary point
- Redux를 이용한 전역 변수 관리
이전에 useContext를 썼었는데, redux로 migration. 이전보다 코드가 복잡해져서 여러 강의를 들으며 공부함. 서비스가 커질수록 더 효용가치가 커질 것.

- Firebase를 이용한 회원 데이터 관리 및 소셜 로그인 구현
서버를 대신해서 firebase를 이용해 봄. 데이터를 카테고리화 하여 간단히 관리할 수 있고, 보안부터 다양한 기능을 제공해준다는 점이 좋았음.

- herotofu api
메세지 전송을 쉽게 하기 위해 리서치 결과 herotofu라는 간편한 api를 이용해보기로 함. 간단한 코드만으로 문의사항이 나의 gmail로 올 수 있도록 함. 그 외에도 다른 메일 주소로 메일이 오게 할 수도 있고, 간편하고 재밌는 API.

- 이후 계획...
비회원으로도 주문이 가능한 시스템을 도입해보고 싶음. 비슷한 웹사이트에서는 비회원으로 주문시 주문번호를 생성하여 로그인 시에 주문번호 로그인 시스템을 가지고 있음.


## Installation and Setup
Clone the repository: git clone https://github.com/17wolfgwang/dynamic_ecommerce
Install dependencies: npm install
Set up Firebase project:

Create a new Firebase project at https://console.firebase.google.com/
Enable authentication, Firestore database, and storage services
Obtain the Firebase configuration details (API keys, etc.)
Update the Firebase configuration in the project code

Set up Stripe:
Create a Stripe account at https://dashboard.stripe.com/register
Obtain the Stripe API keys
Update the Stripe API keys in the project code
Start the development server: npm start
Open the website in your browser: http://localhost:3000
Deployment
The website is deployed on Netlify. The deployment process is automatically triggered whenever changes are pushed to the main branch of the repository.

To deploy the website on your own Netlify account:
Create a new site on Netlify.
Connect the site to your GitHub repository.
Configure the build settings and environment variables.
Trigger a new deployment.

Contributing
Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

Fork the repository.
Create a new branch for your feature or bug fix: git checkout -b feature/your-feature. <br>
Make the necessary changes and commit them. <br>
Push your changes to your forked repository: git push origin feature/your-feature. <br>
Open a pull request in the main repository.<br>

License
This project is licensed under the MIT License.

Contact
If you have any questions or suggestions regarding the dynamic e-commerce website, please feel free to contact us at dkzks44@gmail.com.

I hope you and your furry friends enjoy the shopping experience on Dynamic.

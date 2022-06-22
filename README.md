<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
# 날씨 데이터를 이용한 앱 개발 프로젝트 요구사항 명세서

## 목차
1. [소개](#1-소개)

    1.1 [목표](#11-목표)<!-- 해당 문서의 목적을 기술 / 문서를 읽을 사람이 누구인지 -->   
    1.2 [범위](#12-범위)<!-- 생산할 SW의 이름 기술 / 해당 SW가 무엇을 하는지 기술 / 관련된 장점, 목표, 목적을 포함 열어 기술되고 있는 SW의 적용을 기술 -->   
    1.3 [용어  정의](#13-용어  정의)<!--  -->   
    1.4 [개발 환경](#14-개발-환경)   
    1.5 [참고 문헌](#15-참고-문헌)<!-- 외부에서 참고한 모든 문서의 리스트 작성 -->   

2. [프로젝트 전체 설명](#2-프로젝트-전체-설명)

    2.1 [전체 동작 방식](#21-전체-동작-방식)   
    2.2 [전체 시스템 구성](#22-전체-시스템-구성)   
    2.3 [전체 기능](#23-전체-기능)   
    2.4 [사용자 특성](#24-사용자-특성)   
    2.5 [제약사항](#25-제약사항)   
3. [세부 요구사항](#3-세부-요구사항)

    3.1 [외부 인터페이스 요구사항](#31-외부-인터페이스-요구사항)   
    3.2 [기능 요구사항](#32-기능-요구사항)   
    3.3 [성능 요구사항](#33-성능-요구사항)   
    3.4 [논리적 데이터베이스 요구사항](#34-논리적-데이터베이스-요구사항)      

<hr/>

## 1. 소개
### 1.1 목표   

이 문서는 2022, 5월 인턴십 평가를 위한 기술문서입니다.
### 1.2 개요  
    
프로젝트명: 날씨 데이터를 이용한 앱 개발
> [AccuWeather](https://www.accuweather.com/)에서 제공되는 API 이용해 사용자에게 날씨에 대한 정보를 보여주는 앱

프로젝트 목적: 시스템 앱을 개발하면서, 요구사항을 분석하고 이해하며, 기술문서를 작성하기 위함입니다.

프로젝트 목표: 주어진 요구사항에 따라 기능을 구현합니다. 테스트 케이스를 작성해 엣지 케이스들을 도출한 뒤 원인을 분석해 적절한 해결책을 찾아 완성도 높은 앱을 구현합니다.

### 1.3 용어 정의

| 용어  | 정의 |
|---|---|
|  AccuWeather  |   |
|  API  |   |
|  React  |   |
|  CRA  |   |
|    |   |
|    |   |
|    |   |

### 1.4 개발 환경
OS: Windows 10 Enterprise   
IDE: VScode   
Language: <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/>   
Library: <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>   

### 1.5 참고 문헌
[AccuWeather API Documentation](https://apidev.accuweather.com/developers/)   
[React Docs](https://reactjs.org/)   
[ipify API Documentation](https://www.ipify.org/)

## 2. 프로젝트 전체 설명
### 2.1 전체 동작 방식   
### 2.2 전체 시스템 구성   
### 2.3 전체 기능   
### 2.4 사용자 특성   
### 2.5 제약사항   

## 3. 세부 요구사항

### 3.1 외부 인터페이스 요구사항   
### 3.2 기능 요구사항   
### 3.3 성능 요구사항   
### 3.4 논리적 데이터베이스 요구사항      
>>>>>>> 2e0c23b6e2ab09b58340ba4619b950aa20f51cb5

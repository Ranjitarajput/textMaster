# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Run  build  coomand ke bad app deploy karne ke liye
//jab npm run build kiya tab dist folder creat hua hai esliye is command ko update karna padega 

## for deploy your website on github pages use -  deploy creat react app github pages 
without router follow all the steps

## uploaded project ko upadate kane ke liye follow this steps 
npm run build
git add .
git commit -m "Updated the React app"
git push origin main
npm run deploy

check your uploaded website after few minuts on the url you aded homepage in package.json 

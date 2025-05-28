FROM node:latest as build

WORKDIR /Documents/A1111/AngularProject/angular-1

COPY ./ /Documents/A1111/AngularProject/angular-1

RUN npm install
#build
RUN npm run build




FROM nginx:latest

COPY --from=build /Documents/A1111/AngularProject/angular-1/dist/angular-1 /Documents/A1111/AngularProject/angulardocker

EXPOSE 80
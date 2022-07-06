export function errorHandler(error){
    if (typeof error.token !== "string"){
        return true;
    }
    return false;
}

/*

- Admin only
- documento de requisitos para ser transformados en historia de usuarios




*/
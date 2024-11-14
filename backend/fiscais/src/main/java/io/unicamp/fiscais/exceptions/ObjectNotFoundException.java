package io.unicamp.fiscais.exceptions;

public class ObjectNotFoundException extends RuntimeException {

    public ObjectNotFoundException() {
        super(ObjectNotFoundException.class.getName());
    }

    public ObjectNotFoundException(String message) {
        super(message);
    }

    public ObjectNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

    public ObjectNotFoundException(Throwable cause) {
        super(cause);
    }

    protected ObjectNotFoundException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
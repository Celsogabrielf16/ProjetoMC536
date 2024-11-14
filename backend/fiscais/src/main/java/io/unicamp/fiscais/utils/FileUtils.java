package io.unicamp.fiscais.utils;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Objects;

public class FileUtils {
    public static String readFileAsString(String filename) throws IOException {
        ClassLoader classLoader = FileUtils.class.getClassLoader();
        String path = Objects.requireNonNull(classLoader.getResource(filename)).getPath();
        return new String(Files.readAllBytes(Path.of(path)));
    }
}

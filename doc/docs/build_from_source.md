---
sidebar_position: 2
---

# Build from Source

This section explains how to build and run `mqtt-ghost`.

## Prerequisites

- **Java 21+**: The utility requires Java 21 or higher.
- A `*.groovy` configuration file (see `example/client_config.groovy` for an example).

## Steps

### 1. **Install Java 21**

Ensure Java 21 or higher is installed. For convenience, you can use SDKMAN!:

```bash
sdk install java 21.0.2-open
sdk use java 21.0.2-open
```

Verify the version:

```bash
java -version
```

Example output:

```text
openjdk 21.0.2 2024-01-16
OpenJDK Runtime Environment (build 21.0.2+13-58)
OpenJDK 64-Bit Server VM (build 21.0.2+13-58, mixed mode, sharing)
```

#### 2. Clone the Project

Clone the mqtt-ghost repository from GitHub:

```bash
git clone git@github.com:epistax1s/mqtt-ghost.git
```

### 3. Build the Project

Navigate to the project directory:

```bash
cd mqtt-ghost
```

Clean and build the JAR file using the Gradle Wrapper:

```bash
./gradlew clean
./gradlew shadowJar
```

This creates an executable JAR at build/libs/mqtt-ghost-1.0-SNAPSHOT-all.jar.

### 4. Run the Utility

Launch the utility with your client_config.groovy file:

```bash
java -jar build/libs/mqtt-ghost-1.0-SNAPSHOT-all.jar ./client_config.groovy
```

### Notes

- The project uses the Gradle Wrapper (`./gradlew`), so a separate Gradle installation is not required.
- Check `example/client_config.groovy` for a sample configuration.
- Detailed configuration and usage instructions are available in the separate documentation.

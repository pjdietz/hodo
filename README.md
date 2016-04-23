# Hodo

**hodo** (pronounced "hoe-doo") allows you to run commands on the command line as Hodor.

Hodor doesn't talk much, so you won't see any of the output from stdout or stderr while the command is running.

When the command finishes, **hodo** will output "Hodor." When a command exists with an error (status code != 0), **hodo** outputs "HODOR!" to stderr.

## Installing

Install Hodo globally using npm:

```bash
npm install -g hodo
```

## Using

To use, enter `hodo` followed by any command. For example, to clone this repository:

```bash
hodo git clone https://github.com/pjdietz/hodo.git
```

## License

Copyright 2016 by PJ Dietz

[MIT License](LICENSE)

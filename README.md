# Ralph

An autonomous agent loop for iterative feature development. Ralph repeatedly invokes an LLM coding agent with a structured prompt, tracking progress through a requirements file until all features are complete.

## Features

- **Multi-agent support**: Works with Claude, Codex, Gemini, Droid, Amp, and OpenCode
- **Structured workflow**: Agents work through features one at a time based on priority
- **Progress tracking**: Maintains a progress log and updates requirements as features complete
- **Automatic retries**: Configurable retry logic for failed agent calls
- **Completion detection**: Exits early when all requirements pass

## Usage

```bash
# Basic usage with Claude (default)
./plans/ralph.sh 10

# Use a different agent
./plans/ralph.sh -a codex 10
./plans/ralph.sh -a gemini 20

# Dry run to preview the prompt
./plans/ralph.sh --dry-run 5

# Custom agent command
./plans/ralph.sh 10 -- my-custom-agent --flag
```

## Requirements File

Create a `plans/requirements.json` based on the provided example template. The file defines:

- **meta**: Project metadata, directory structure, and validator commands
- **features**: Ordered list of features with priorities, descriptions, and completion status

## How It Works

1. Ralph reads the requirements file and finds the highest-priority incomplete feature
2. Invokes the configured agent with a structured prompt
3. Agent implements the feature, runs validators, and marks it complete
4. Progress is logged and committed (if in a git repo)
5. Loop continues until all features pass or max iterations reached

## Inspiration

This project was influenced by:

- [Matt Pocock](https://www.youtube.com/@mattpocockuk)
- [ghuntley/ralph](https://ghuntley.com/ralph/)
- [Anthropic: Effective Harnesses for Long-Running Agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)


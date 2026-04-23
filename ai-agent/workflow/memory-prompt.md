# Memory Creation Workflow

When I invoke this workflow, you MUST create a comprehensive project memory by following ALL steps below. The Title and Description are CRITICAL - they determine if this memory gets retrieved in future sessions, so make them comprehensive and specific.

---

## STEP 1: Retrieve FULL Conversation History
Use `trajectory_search` to get the COMPLETE conversation from the VERY FIRST message of this session to NOW.
- Do NOT limit to recent steps
- Get the entire conversation arc from start to finish
- This captures requirement evolution, user corrections, and decision rationale

## STEP 2: Identify ALL Modified Files
From the full conversation history, identify every single file that was:
- Created
- Modified
- Deleted

List them all with their full paths.

## STEP 3: Re-read ALL Modified Files
For each file identified in Step 2, read its CURRENT contents from disk using `read_file`.

**WHY THIS MATTERS:** The user often makes manual tweaks after AI suggestions (e.g., changing padding from 10px to 2px). These manual changes exist ONLY in the file, NOT in the conversation. Reading files captures:
- User's design preferences
- Style conventions
- Final implementation details
- Technical decisions made during manual edits

## STEP 4: Analyze the Complete Journey
Based on:
- Full conversation history (Step 1)
- Current file states (Step 3)

Extract and document:
1. **Initial Request** - What the user asked for at the very beginning
2. **Requirement Evolution** - How requirements changed through the conversation
3. **Technical Approach** - Initial strategy and why it was chosen
4. **Problems & Roadblocks** - Errors, failures, or challenges encountered
5. **Solution Iterations** - What was tried, what failed, what worked
6. **User Modifications** - Manual tweaks the user made to your suggestions
7. **Final State** - What was ultimately achieved and how

## STEP 5: Generate the Memory File

**OUTPUT LOCATION:** `ai-agent/memories/[kebab-case-title].md`

**CRITICAL RULES:**
1. **Title** - Must be specific, searchable, and descriptive. Include the core task + technology + outcome.
2. **Description** - 2-3 sentences covering: what was needed, approach taken, key decisions/problems solved, final result. Include specific technologies/frameworks.
3. **Tags** - Include framework, tool, domain, and relevant keywords for future retrieval.

**EXACT FORMAT:**

```markdown
# Title: [Specific, descriptive task name with technology]
# Description: [2-3 sentences: what was needed + approach + key challenges/decisions + final outcome. Include specific frameworks/tools.]
# Tags: [framework, tool, domain, keyword1, keyword2]

---

### Context
[Describe the codebase state BEFORE this task started. What existed? What was missing? What was the starting point?]

### Goal
[The original user request + any evolved requirements that emerged during the conversation. What were we trying to achieve?]

### The Implementation Journey
* **Initial Approach:** [What we tried first and why]
* **Problems Encountered:** [Specific errors, blockers, or challenges faced]
* **Solution Evolution:** [How the solution changed through iterations]
* **User Modifications:** [Manual changes you made to AI suggestions - these reveal your preferences]
* **Final Solution:** [What actually worked and the reasoning behind it]

### Coding Style & Conventions Established
* [Specific convention with example from the files - e.g., "Use kebab-case for CSS custom properties: `--color-primary-500`"]
* [Pattern for components/functions/classes with example]
* [File organization rule with example]
* [Naming convention with example]
```

## MANDATORY VERIFICATION CHECKLIST
Before outputting the memory, confirm:
- [ ] Full conversation history retrieved (from very first message)?
- [ ] ALL modified files identified from the conversation?
- [ ] ALL modified files re-read to capture current state?
- [ ] Title is specific, searchable, and includes key technologies?
- [ ] Description covers complete arc: need → approach → outcome?
- [ ] User's manual style preferences and modifications documented?
- [ ] Coding conventions include specific examples from actual files?

---

**FINAL OUTPUT INSTRUCTION:**
Output ONLY the raw memory file content. No conversational filler. No code block wrappers around the output. Just the raw markdown that will be saved to the file.

The memory file MUST be saved to: `ai-agent/memories/[kebab-case-title].md`


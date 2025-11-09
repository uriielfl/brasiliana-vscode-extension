
import * as vscode from 'vscode';

const KEYWORDS = [
  'declarar', 'variavel', 'funcao', 'se', 'senao',
  'enquanto', 'repita', 'de', 'ate', 'retorne', 'imprimir', 'lerEntrada',
  'Verdadeiro', 'Falso'
];

export function activate(context: vscode.ExtensionContext) {
  const selector = { language: 'brasiliana', scheme: 'file' };

  // Simple completion provider for keywords
  const completion = vscode.languages.registerCompletionItemProvider(
    selector,
    {
      provideCompletionItems(doc, pos) {
        return KEYWORDS.map(k => {
          const item = new vscode.CompletionItem(k, vscode.CompletionItemKind.Keyword);
          return item;
        });
      }
    }
  );

  // Bracket/quote auto-close & comment toggle already handled by language-configuration.json

  context.subscriptions.push(completion);
}

export function deactivate() {}
